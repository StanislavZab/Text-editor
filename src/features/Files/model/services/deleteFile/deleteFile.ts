import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { fetchFilesList } from '@/entities/Files/model/services/fetchFilesList';

export const deleteFiles = createAsyncThunk<
    void,
    string,
    ThunkConfig<string>
>(
    'files/deleteFiles',
    async (id, { extra, rejectWithValue, dispatch }) => {
        try {
            const response = await extra.api.delete(`/files/${id}`);

            if (response.status !== 200) {
                throw new Error();
            }

            dispatch(fetchFilesList());

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
