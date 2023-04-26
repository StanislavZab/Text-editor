import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { FileData } from '../../types/editorSchema';

export const fetchFileById = createAsyncThunk<
    FileData,
    string,
    ThunkConfig<string>
>(
    'editor/fetchFileById',
    async (id, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<FileData>(`/files/${id}`);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
