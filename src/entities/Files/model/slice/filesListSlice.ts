import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilesListSchema, File } from '../types/filesListSchema';
import { fetchFilesList } from '../services/fetchFilesList';

const initialState: FilesListSchema = {
    isLoading: false,
    data: undefined,
    error: undefined,
};

export const filesListsSlice = createSlice({
    name: 'filesList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilesList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchFilesList.fulfilled, (state, action: PayloadAction<File[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchFilesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: filesListsActions } = filesListsSlice;
export const { reducer: filesListReducer } = filesListsSlice;
