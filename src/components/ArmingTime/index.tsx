import { FC, ReactElement, useState } from "react";
import { Checkbox, Popconfirm, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { cloneDeep } from "lodash";
import { IDay, ITimeline, WEEK } from "./interface";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import Day from "./Day";
import "./index.css";

// const initState = {}

const ArmingTime: FC = (): ReactElement => {
  const [indeterminate, setIndeterminate] = useState<boolean>(false);
  const [checkAll, setCheckAll] = useState<boolean>(false);
  const [week, setWeek] = useState<IDay[]>([
    { day: WEEK.MOMENDAY, timelines: [], checked: false, delete: false },
    { day: WEEK.THUESDAY, timelines: [], checked: false, delete: false },
    { day: WEEK.WEDNESDAY, timelines: [], checked: false, delete: false },
    { day: WEEK.THURSDAY, timelines: [], checked: false, delete: false },
    { day: WEEK.FIRDAY, timelines: [], checked: false, delete: false },
    { day: WEEK.SATURDAY, timelines: [], checked: false, delete: false },
    { day: WEEK.SUNDAY, timelines: [], checked: false, delete: false },
  ]);
  // const [state, dispatch] = useReducer(weekReducer, initState)

  // 单选
  const onCheckSingleChange = (index: number) => {
    let _week: IDay[] = cloneDeep(week),
      _indeterminate: boolean = false,
      _checkAll: boolean = false;
    _week[index].checked = !_week[index].checked;
    _week.forEach((day) => {
      if (day.checked) {
        _indeterminate = true;
      }
    });
    if (!_week.find((day) => !day.checked)) {
      _indeterminate = false;
      _checkAll = true;
    }
    setWeek(_week);
    setIndeterminate(_indeterminate);
    setCheckAll(_checkAll);
  };

  // 全选
  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    let _week: IDay[] = cloneDeep(week);
    _week.forEach((day) => {
      if (e.target.checked && !day.checked) {
        day.checked = true;
      }
      if (!e.target.checked) {
        day.checked = false;
      }
    });
    setWeek(_week);
    setIndeterminate(false);
    setCheckAll((checkAll) => !checkAll);
  };

  // 更新画线数据
  const getDay = (timelines: ITimeline[], dayIndex: number) => {
    let _week: IDay[] = cloneDeep(week);
    const index = timelines.findIndex((slider) => slider.border === true);
    if (index > -1) {
      _week[dayIndex].delete = true;
    } else {
      _week[dayIndex].delete = false;
    }
    _week[dayIndex].timelines = timelines;
    setWeek(_week);
  };

  // 更新复制的画线数据
  const getCopyDays = (timelines: ITimeline[], dayIndexs: number[]) => {
    let _week: IDay[] = cloneDeep(week);
    dayIndexs.forEach((index) => {
      _week[index].timelines = timelines;
    });
    setWeek(_week);
  };

  // 批量删除
  const batchDelete = () => {
    let _week: IDay[] = week,
      del: boolean = false;
    _week.forEach((day) => {
      if (day.checked) {
        del = true;
        day.timelines = [];
        day.checked = false;
      }
    });
    if (!del) {
      message.error("请先选择一个数据");
    }
    setWeek(_week);
    setIndeterminate(false);
    setCheckAll(false);
  };
  return (
    <div className="container">
      <div className="batch-operation">
        <Popconfirm
          title="确定批量删除吗"
          onConfirm={batchDelete}
          okText="确定"
          cancelText="取消"
        >
          <span className="batch-delete">
            <DeleteOutlined className="icon" />
            <span>批量删除</span>
          </span>
        </Popconfirm>
      </div>
      <div className="table">
        <div className="theader">
          <Checkbox
            className="checkbox"
            indeterminate={indeterminate}
            checked={checkAll}
            onChange={onCheckAllChange}
          ></Checkbox>
          <div className="date">日期</div>
          <div className="period">时间段</div>
          <div className="action">操作</div>
        </div>
        {week.map((day, i) => {
          return (
            <Day
              key={day.day}
              dayIndex={i}
              day={day}
              getDay={getDay}
              onCheckSingleChange={onCheckSingleChange}
              getCopyDays={getCopyDays}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ArmingTime;
