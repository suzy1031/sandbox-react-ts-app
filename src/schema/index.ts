import dayjs, { type Dayjs } from 'dayjs';
import { z } from 'zod';

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
        message: '不正な文字が含まれています',
      }),
    // ref: https://github.com/colinhacks/zod/discussions/1259
    startDate: z.instanceof(dayjs as unknown as typeof Dayjs, {
      message: '日付を入力してください',
    }),
    endDate: z.instanceof(dayjs as unknown as typeof Dayjs, {
      message: '日付を入力してください',
    }),
  })
  .refine(
    (args) => {
      const { startDate, endDate } = args;
      // 終了日が開始日より未来かどうか
      const checkAfter = endDate.isAfter(startDate);

      return checkAfter;
    },
    {
      message: '終了日は開始日より未来の日付にしてください',
      path: ['endDate'],
    },
  )
  .refine(
    (args) => {
      const { startDate, endDate } = args;
      // 開始日が終了日より過去かどうか
      const checkBefore = startDate.isBefore(endDate);

      return checkBefore;
    },
    {
      message: '開始日より未来の日付にしてください',
      path: ['startDate'],
    },
  );

export type FormSchemaType = z.infer<typeof FormSchema>;
