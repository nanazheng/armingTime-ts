import { ITime } from "./interface";

export function coordinateToTime(
  startOffset: number,
  endOffset: number
): ITime {
  //slider 的 width 为720，60 * 24 = 1440，为了都用整数好计算，所以 * 2
  const startHour: number = Math.floor((startOffset * 2) / 60);
  const startMin: number = (startOffset * 2) % 60;
  const endHour: number = Math.floor((endOffset * 2) / 60);
  const endMin: number = (endOffset * 2) % 60;
  const startTime: string = `${startHour > 9 ? startHour : `0${startHour}`}:${
    startMin > 9 ? startMin : `0${startMin}`
  }`;
  const endTime: string = `${endHour > 9 ? endHour : `0${endHour}`}:${
    endMin > 9 ? endMin : `0${endMin}`
  }`;
  return {
    startTime,
    endTime,
    startHour,
    startMin,
    endHour,
    endMin,
  };
}

export function timeToCoordinate(startTime: string, endTime: string) {
  let [startHour, startMin]: Array<string | number> = startTime.split(":");
  let [endHour, endMin]: Array<string | number> = endTime.split(":");
  startHour = parseInt(startHour);
  startMin = parseInt(startMin);
  endHour = parseInt(endHour);
  endMin = parseInt(endMin);
  const offset = (startHour * 60 + startMin) / 2;
  const length = (endHour * 60 + endMin) / 2 - offset;
  return {
    offset,
    length,
    startHour,
    startMin,
    endHour,
    endMin,
  };
}

export function range(start: number, end: number): number[] {
  let result: number[] = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}
