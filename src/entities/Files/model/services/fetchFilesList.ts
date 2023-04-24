import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { File } from '../types/filesListSchema';

export const fetchFilesList = createAsyncThunk<
    File[],
    void,
    ThunkConfig<string>
>(
    'files/fetchFilesList',
    async (_, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<File[]>('/files');

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
