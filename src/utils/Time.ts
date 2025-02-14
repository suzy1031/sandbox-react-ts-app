import dayjs, { type Dayjs } from 'dayjs';

export const combineDateAndTime = (date: Dayjs, time: number): string => {
  const dateStr = date.format('YYYY/MM/DD');

  return new Date(`${dateStr} ${time}:00`).toISOString();
};

export const checkAfter = (
  startDate: Dayjs,
  endDate: Dayjs,
  startTime: number,
  endTime: number,
): boolean => {
  const start = dayjs(combineDateAndTime(startDate, startTime));
  const end = dayjs(combineDateAndTime(endDate, endTime));
  const checkAfter = end.isAfter(start);

  return checkAfter;
};

export const checkBefore = (
  startDate: Dayjs,
  endDate: Dayjs,
  startTime: number,
  endTime: number,
): boolean => {
  const start = dayjs(combineDateAndTime(startDate, startTime));
  const end = dayjs(combineDateAndTime(endDate, endTime));
  const checkBefore = start.isBefore(end);

  return checkBefore;
};
