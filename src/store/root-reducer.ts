import { baseApi } from '@api/base-api';

import taskReducer from './slices/task-slice';

export const reducers = {
    task: taskReducer,
    [baseApi.reducerPath]: baseApi.reducer,
};

export const middleware = [baseApi.middleware];
