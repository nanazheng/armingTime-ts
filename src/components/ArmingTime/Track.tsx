import React, { FC, ReactElement, useState } from "react";
import { Popover } from "antd";
import { ITimeline } from "./interface";
import EditTime from "./EditTime";

interface IProps {
  activeIndex: number;
  dayIndex: number;
  changeTrack: (index: number) => void;
  timeline: ITimeline;
  offset: number;
  length: number;
  timelines: ITimeline[];
  getDay: (timelines: ITimeline[], dayIndex: number) => void;
}

const Track: FC<IProps> = ({
  activeIndex,
  dayIndex,
  changeTrack,
  timeline,
  offset,
  length,
  timelines,
  getDay,
}): ReactElement => {
  const [visible, setVisible] = useState<boolean>(false);
  const style: React.CSSProperties = {
    visibility: "visible",
    left: offset + "px",
    width: length + "px",
  };
  if (timeline.border) {
    style.height = "14px";
    style.border = "1px dotted rgb(34 103 0)";
  }

  const handleVisibleClose = () => {
    setVisible(false);
  };
  const handleVisibleChange = (visible: boolean) => {
    setVisible(visible);
  };
  return (
    <Popover
      title="修改时间"
      content={
        <EditTime
          activeIndex={activeIndex}
          dayIndex={dayIndex}
          timeline={timeline}
          timelines={timelines}
          handleVisibleClose={handleVisibleClose}
          getDay={getDay}
        />
      }
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
    >
      <div
        className="timeline-track"
        onClick={() => changeTrack(activeIndex)}
        style={style}
      >
        {timeline.showTime && (
          <div style={{ position: "relative" }}>
            <span className="rc-track-time" style={{ left: 0 }}></span>
            <span className="rc-track-time" style={{ left: length - 1 }}></span>
            {/* <Tooltip title={timeline.startTime} defaultVisible={true}>
            <span className="track-time" style={{ left: 0 }}></span>
          </Tooltip>
          <Tooltip title={timeline.endTime} defaultVisible={true}>
            <span className="track-time" style={{ left: length - 1 }}></span>
          </Tooltip> */}
          </div>
        )}
      </div>
    </Popover>
  );
};

export default Track;
