import baseApi from '@api/base-api';

import { UploadSurveyPayload, UploadSurveyResponse } from '@api/protocol';
import { CreateSurveySchema, SurveySchema } from '@shared-types/survey';

import { validatePayload } from '@utils/zod-validator';

const surveyService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        uploadSurvey: builder.mutation<UploadSurveyResponse, UploadSurveyPayload>({
            query: (body) => {
                const validatedBody = validatePayload(CreateSurveySchema, body);
                return {
                    url: '/submit-survey',
                    method: 'POST',
                    body: validatedBody,
                };
            },

            transformResponse: (response: unknown) => {
                console.log(response);

                return validatePayload(SurveySchema, response);
            },
        }),
    }),
});

export const { useUploadSurveyMutation } = surveyService;
