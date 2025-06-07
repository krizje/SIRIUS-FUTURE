import baseApi from '@api/base-api';

import { UploadImagesPayload, UploadImagesResponse } from '@api/protocol';
import { CreateUploadSchema, UploadSchema } from '@shared-types/upload';
import { validatePayload } from '@utils/zod-validator';

const uploadService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        uploadImages: builder.mutation<UploadImagesResponse, UploadImagesPayload>({
            query: (body) => {
                const validatedBody = validatePayload(CreateUploadSchema, body);
                return {
                    url: '/upload',
                    method: 'POST',
                    body: validatedBody,
                };
            },

            transformResponse: (response: unknown) => {
                console.log(response);

                return validatePayload(UploadSchema, response);
            },
        }),
    }),
});

export const { useUploadImagesMutation } = uploadService;
