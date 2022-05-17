import React, { FC, ReactElement, useRef, useState } from "react";
import { Checkbox } from "antd";
import { isEmpty, cloneDeep } from "lodash";
import { coordinateToTime, range } from "./util";
import { IDay, ITimeline } from "./interface";
import Track from "./Track";
import Action from "./Action";

interface IProps {
  day: IDay;
  dayIndex: number;
  getDay: (timelines: ITimeline[], dayIndex: number) => void;
  onCheckSingleChange: (index: number) => void;
  getCopyDays: (timelines: ITimeline[], copyIndexs: number[]) => void;
}

const Day: FC<IProps> = ({
  day,
  dayIndex,
  getDay,
  onCheckSingleChange,
  getCopyDays,
}): ReactElement => {
  let offset: number,
    startPosition: number,
    activeTimelineIndex: number,
    time_sliders: ITimeline[] = cloneDeep(day.timelines);
  const [coincide, setCoincide] = useState<boolean>(false);
  const [trackIndex, setTrackIndex] = useState<number | undefined>(undefined);
  const SliderRef = useRef<HTMLDivElement>(null);

  // 按下鼠标左键
  const onMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.button !== 0) {
      return;
    }
    e.stopPropagation();
    e.preventDefault();
    const { left } = SliderRef.current!.getBoundingClientRect();
    const { pageX: position } = e;
    onStartMove(position, left);
  };

  const onStartMove = (position: number, left: number) => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    offset = Math.floor(position - left); // 时间条距离边框的宽度
    startPosition = position; // 鼠标左键按下位置
    activeTimelineIndex = day.timelines.length; // 正在画线的 index
    let _coincide: boolean = false;
    if (!isEmpty(day.timelines)) {
      //处理画线重合
      day.timelines.forEach((slider) => {
        if (slider.offset < offset && slider.offset + slider.length > offset) {
          _coincide = true;
        }
      });
    }
    setCoincide(_coincide);
  };

  const onMouseMove = (e: MouseEvent) => {
    e.preventDefault();
    if (coincide) return; // 鼠标按下位置已有画线
    let length: number = e.pageX - startPosition;
    // 当画线超过 slider 总长度时
    if (offset + length >= 720) {
      length = 719.5 - offset;
    }
    // 限制画线重合
    day.timelines.forEach((timeline) => {
      if (offset < timeline.offset && offset + length > timeline.offset) {
        length = timeline.offset - offset - 1;
      }
    });
    const { startTime, endTime, startHour, startMin, endHour, endMin } =
      coordinateToTime(offset, offset + length);
    time_sliders[activeTimelineIndex] = {
      offset,
      length,
      startTime,
      endTime,
      startHour,
      startMin,
      endHour,
      endMin,
      // showTime: true,
    };

    //过滤 length <= 0的slider
    time_sliders = time_sliders.filter((slider) => slider.length > 0);

    getDay(time_sliders, dayIndex);
  };

  const onMouseUp = (e: MouseEvent) => {
    e.preventDefault();
    // const index = time_sliders.findIndex((slider) => slider.showTime);
    // if (index > -1) {
    //   time_sliders[index].showTime = false;
    // }
    getDay(time_sliders, dayIndex);
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  // 点击选中 track
  const changeTrack = (index: number) => {
    time_sliders.forEach((slider) => {
      if (slider.border) slider.border = false;
    });
    time_sliders[index].border = true;
    getDay(time_sliders, dayIndex);
    setTrackIndex(index);
  };

  // 删除选中的 track
  const handleDeleteTrack = () => {
    if (isEmpty(day.timelines) || trackIndex === undefined) return;
    time_sliders.splice(trackIndex, 1);
    getDay(time_sliders, dayIndex);
    setTrackIndex(undefined);
  };
  return (
    <div className="day">
      <Checkbox
        checked={day.checked}
        className="checkbox"
        onChange={(e) => onCheckSingleChange(dayIndex)}
      ></Checkbox>
      <div className="date">{day.day}</div>
      <div className="timeline">
        <div className="time">
          {range(0, 24).map((hour) => {
            return (
              <div className="hour" key={hour}>
                <span>{hour}</span>
                <i className="line"></i>
              </div>
            );
          })}
        </div>
        <div ref={SliderRef} onMouseDown={onMouseDown} className="slider">
          {day.timelines.map((timeline, i) => {
            return (
              <Track
                key={i}
                activeIndex={i}
                dayIndex={dayIndex}
                timeline={timeline}
                offset={timeline.offset}
                length={timeline.length}
                timelines={day.timelines}
                changeTrack={changeTrack}
                getDay={getDay}
              />
            );
          })}
        </div>
      </div>
      <Action
        trackIndex={trackIndex}
        getCopyDays={getCopyDays}
        day={day}
        dayIndex={dayIndex}
        handleDeleteTrack={handleDeleteTrack}
      />
    </div>
  );
};

export default Day;
