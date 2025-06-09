import { z } from 'zod';

export const SurveySchema = z.object({
    message: z.string(),
    task_id: z.string(),
});

export type SurveyDto = z.infer<typeof SurveySchema>;

const Gender = z.enum(['Мальчик', 'Девочка']);
const Date = z.string().regex(/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/);

export const SurveyFieldsSchema = z.object({
    childName: z.string().nonempty().min(3),
    childDOB: Date,
    childGender: Gender,
    parentName: z.string().nonempty().min(3),

    q1_1: z.string(),
    q1_2: z.string(),
    q1_3: z.string(),
    q1_4: z.string(),
    q1_5: z.string(),
    q1_6: z.string(),
    q1_7: z.string(),
    q1_8: z.string(),
    q1_9: z.string(),
    q1_10: z.string(),

    q2_1: z.string(),
    q2_2: z.string(),
    q2_3: z.string(),
    q2_4: z.string(),
    q2_5: z.string(),
    q2_6: z.string(),
    q2_7: z.string(),
    q2_8: z.string(),
    q2_9: z.string(),
    q2_10: z.string(),

    q3_1: z.string(),
    q3_2: z.string(),
    q3_3: z.string(),
    q3_4: z.string(),
    q3_5: z.string(),
    q3_6: z.string(),
    q3_7: z.string(),
    q3_8: z.string(),
    q3_9: z.string(),
    q3_10: z.string(),

    q4_1: z.string(),
    q4_2: z.string(),
    q4_3: z.string(),
    q4_4: z.string(),
    q4_5: z.string(),
    q4_6: z.string(),
    q4_7: z.string(),
    q4_8: z.string(),
    q4_9: z.string(),
    q4_10: z.string(),

    q5_1: z.string().nonempty().min(3),
    q5_2: z.string().nonempty().min(3),
    q5_3: z.string().nonempty().min(3),
    q5_4: z.string().nonempty().min(3),
    q5_5: z.string(),
    q5_6: z.string(),
    q5_7: z.string(),
    q5_8: z.string(),
    q5_9: z.string(),
    q5_10: z.string(),

    emotionalState: z.string(),
});

export type SurveyFieldsDto = z.infer<typeof SurveyFieldsSchema>;

export const CreateSurveySchema = z.object({
    task_id: z.string(),
    survey: SurveyFieldsSchema,
});

export type CreateSurveyDto = z.infer<typeof CreateSurveySchema>;
