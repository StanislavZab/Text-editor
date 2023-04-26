import { createSlice } from '@reduxjs/toolkit';
import { FileSchema } from '../types/fileSchema';
import { deleteFiles } from '../services/deleteFile/deleteFile';

const initialState: FileSchema = {
    isDelete: false,
    error: undefined,
};

export const fileSlice = createSlice({
    name: 'file',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(deleteFiles.pending, (state) => {
                state.error = undefined;
                state.isDelete = true;
            })
            .addCase(deleteFiles.fulfilled, (state) => {
                state.isDelete = false;
            })
            .addCase(deleteFiles.rejected, (state, action) => {
                state.isDelete = false;
                state.error = action.payload;
            });
    },
});

export const { actions: fileActions } = fileSlice;
export const { reducer: fileReducer } = fileSlice;
