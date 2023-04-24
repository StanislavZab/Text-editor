import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { fetchFilesList } from '@/entities/Files/model/services/fetchFilesList';

export const addFile = createAsyncThunk<
    void,
    FormData,
    ThunkConfig<string>
>(
    'files/addFile',
    async (formData, { extra, rejectWithValue, dispatch }) => {
        try {
            const response = await extra.api.put('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                onUploadProgress(progressEvent) {
                    console.log(progressEvent.loaded);
                },
            });

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
