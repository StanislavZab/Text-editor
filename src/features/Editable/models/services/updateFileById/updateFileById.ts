import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';

export const updateFileById = createAsyncThunk<
    string,
    string,
    ThunkConfig<string>
>(
    'editor/updateFileById',
    async (id, { extra, rejectWithValue, getState }) => {
        try {
            const data = getState().editor.data?.data;
            const response = await extra.api.post<string>(`/files/${id}`, { data });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
