import { useState } from "react";
import { Button, message, TimePicker } from "antd";
import { cloneDeep } from "lodash";
import moment from "moment";
import { ITimeline } from "./interface";
import { timeToCoordinate } from "./util";

type Iprops = {
  activeIndex: number;
  dayIndex: number;
  timeline: ITimeline;
  timelines: ITimeline[];
  handleVisibleClose: () => void;
  getDay: (timelines: ITimeline[], dayIndex: number) => void;
};

const format = "HH:mm";

export default function EditTime(props: Iprops) {
  const {
    activeIndex,
    dayIndex,
    timeline,
    timelines,
    handleVisibleClose,
    getDay,
  } = props;
  const [startTime, setStartTime] = useState(
    moment(timeline.startTime, format)
  );
  const [endTime, setEndTime] = useState(moment(timeline.endTime, format));

  const changeStartTime = (time: any) => {
    setStartTime(time);
  };

  const changeEndTime = (time: any) => {
    setEndTime(time);
  };

  const confirm = () => {
    if (startTime > endTime) message.error("开始时间不能晚于结束时间");
    if (
      activeIndex > 0 &&
      startTime < moment(timelines[activeIndex - 1].endTime, format)
    )
      message.error("开始时间不能超过上一时间条的结束时间");
    if (
      activeIndex < timelines.length - 1 &&
      endTime > moment(timelines[activeIndex + 1].startTime, format)
    )
      return message.error("结束时间不能大于下一时间条的开始时间");
    let time_sliders = cloneDeep(timelines);
    const _startTime = moment(startTime).format(format);
    const _endTime = moment(endTime).format(format);

    const { offset, length, startHour, startMin, endHour, endMin } =
      timeToCoordinate(_startTime, _endTime);

    time_sliders[activeIndex] = {
      ...time_sliders[activeIndex],
      offset,
      length,
      startTime: _startTime,
      endTime: _endTime,
      startHour,
      startMin,
      endHour,
      endMin,
    };
    getDay(time_sliders, dayIndex);
    handleVisibleClose();
  };
  return (
    <div>
      <div className="edit-time">
        <TimePicker
          placeholder="开始时间1"
          value={startTime}
          format={format}
          allowClear={false}
          showNow={false}
          onChange={changeStartTime}
        />
        <span>至</span>
        <TimePicker
          placeholder="结束时间"
          value={endTime}
          format={format}
          allowClear={false}
          showNow={false}
          onChange={changeEndTime}
        />
      </div>
      <div className="pop-footer">
        <Button
          size="small"
          type="default"
          style={{ marginRight: "10px" }}
          // onClick={handleVisibleChange}
          onClick={handleVisibleClose}
        >
          取消
        </Button>
        <Button size="small" type="primary" onClick={confirm}>
          确认
        </Button>
      </div>
    </div>
  );
}
