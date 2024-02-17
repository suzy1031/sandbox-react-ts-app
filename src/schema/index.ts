import { z } from 'zod';

export const FormSchema = z.object({
  name: z
    .string()
    .min(1, { message: '必須入力です' })
    .max(100, { message: '100文字以内で入力してください' })
    /**
     * 空白文字を許容しない
     * ref: https://stackoverflow.com/questions/76835215/zod-string-without-spaces-validation-no-regexp
     */
    .refine((s) => !s.includes(' '), { message: '不正な文字が含まれています' }),
});

export type FormSchemaType = z.infer<typeof FormSchema>;
