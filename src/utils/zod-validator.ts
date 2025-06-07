import { ZodSchema } from 'zod';

export const validatePayload = <T>(schema: ZodSchema<T>, payload: unknown): T => {
    const validationResult = schema.safeParse(payload);
    if (!validationResult.success) {
        console.error('☠️ Zod Validation Error:', validationResult.error.format());
        throw new Error('Invalid payload format');
    }
    return validationResult.data;
};
