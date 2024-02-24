import dayjs, { type Dayjs } from 'dayjs';
import { z } from 'zod';
import { checkAfter, checkBefore } from '../utils/Time';

const MESSAGE = {
  REQUIRED: '必須入力です',
  MAX_LENGTH: '100文字以内で入力してください',
  INVALID_CHAR: '不正な文字が含まれています',
  DATE_REQUIRED: '日付を入力してください',
  FUTURE_DATE: '終了日は開始日より未来の日付にしてください',
  PAST_DATE: '開始日は終了日より過去の日付にしてください',
};

export const FormSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: '必須入力です' })
      .max(100, { message: '100文字以内で入力してください' })
      /**
       * 空白文字を許容しない
       * ref: https://stackoverflow.com/questions/76835215/zod-string-without-spaces-validation-no-regexp
       */
      .refine((s) => !s.includes(' '), {
        message: MESSAGE.INVALID_CHAR,
      }),
    // ref: https://github.com/colinhacks/zod/discussions/1259
    startDate: z.instanceof(dayjs as unknown as typeof Dayjs, {
      message: MESSAGE.DATE_REQUIRED,
    }),
    endDate: z.instanceof(dayjs as unknown as typeof Dayjs, {
      message: MESSAGE.DATE_REQUIRED,
    }),
    startTime: z.number().int().min(1).max(24),
    endTime: z.number().int().min(1).max(24),
  })
  .refine(
    (args) => {
      const { startDate, endDate, startTime, endTime } = args;
      // 終了日が開始日より未来かどうか
      const isAfter = checkAfter(startDate, endDate, startTime, endTime);

      return isAfter;
    },
    {
      message: MESSAGE.FUTURE_DATE,
      path: ['endDate'],
    },
  )
  .refine(
    (args) => {
      const { startDate, endDate, startTime, endTime } = args;
      // 開始日が終了日より過去かどうか
      const isBefore = checkBefore(startDate, endDate, startTime, endTime);

      return isBefore;
    },
    {
      message: MESSAGE.PAST_DATE,
      path: ['startDate'],
    },
  )
  .refine(
    (args) => {
      const { startDate, endDate, startTime, endTime } = args;
      const isAfter = checkAfter(startDate, endDate, startTime, endTime);

      return isAfter;
    },
    {
      message: MESSAGE.FUTURE_DATE,
      path: ['endTime'],
    },
  )
  .refine(
    (args) => {
      const { startDate, endDate, startTime, endTime } = args;
      const isBefore = checkBefore(startDate, endDate, startTime, endTime);

      return isBefore;
    },
    {
      message: MESSAGE.PAST_DATE,
      path: ['startTime'],
    },
  );

export type FormSchemaType = z.infer<typeof FormSchema>;
