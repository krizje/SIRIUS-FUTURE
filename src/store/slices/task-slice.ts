import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { useSelector } from 'react-redux';
import { RootState } from '@store/index';

type TaskID = string;
type TaskStatus = string;

interface TaskState {
    task_id: TaskID | null;
    status: TaskStatus | null;
}

const initialState: TaskState = {
    task_id: null,
    status: null,
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setTaskInfo: (state, action: PayloadAction<TaskState>) => {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
});

export const useTask = (): TaskState => useSelector((state: RootState) => state.task);

export const { setTaskInfo } = taskSlice.actions;

export default taskSlice.reducer;
