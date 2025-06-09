import { z } from 'zod';

export const UploadSchema = z.object({
    task_id: z.string(),
    status: z.string(),
});

export type UploadDto = z.infer<typeof UploadSchema>;

export const CreateUploadSchema = z.object({
    files: z.array(z.instanceof(File)).min(3).max(3),
});

export type CreateUploadDto = z.infer<typeof CreateUploadSchema>;
