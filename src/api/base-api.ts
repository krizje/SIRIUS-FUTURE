import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { env } from '../env';

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: env.VITE_API_ENDPOINT,
    }),
    endpoints: () => ({}),
});

export default baseApi;
