import {z} from 'zod';

export const validationSchema = z.object({
    email: z.string().min(1, {message: "emailを入力してください"}).email("正しいメールアドレスを入力してください"),
    password: z.string().min(1, {message: "passwordを入力してください"}),
})