import { z } from 'zod';

const envVariables = z.object({
    VITE_API_ENDPOINT: z.string().url(),
});

export const env = envVariables.parse(import.meta.env);
