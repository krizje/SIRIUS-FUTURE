import baseApi from '@api/base-api';

import { UploadImagesResponse } from '@api/protocol';
import { UploadSchema } from '@shared-types/upload';
import { validatePayload } from '@utils/zod-validator';
//import { z } from 'zod';

const uploadService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        uploadImages: builder.mutation<UploadImagesResponse, FormData>({
            query: (body) => {
                //const validatedBody = validatePayload(z.instanceof(FormData), body);
                return {
                    url: '/upload',
                    method: 'POST',
                    body: body,
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
