import { z } from 'zod';

export const UploadSchema = z.object({
    task_id: z.string(),
    status: z.string(),
});

export type UploadDto = z.infer<typeof UploadSchema>;

export const CreateUploadSchema = z.instanceof(FormData);

export type CreateUploadDto = z.infer<typeof CreateUploadSchema>;
