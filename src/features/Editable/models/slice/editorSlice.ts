import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditorSchema, FileData } from '../types/editorSchema';
import { fetchFileById } from '../services/fetchFileById/fetchFileById';
import { updateFileById } from '../services/updateFileById/updateFileById';

const initialState: EditorSchema = {
    search: '',
    keySearch: 1,
    isLoading: false,
    isUpdate: false,
};

export const editorSlice = createSlice({
    name: 'editor',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            let data = action.payload.replace(/<br>/g, '\n');
            data = data.replace(/<span style="background: yellow">|<\/span>/g, '');
            state.data = { filename: state.data?.filename as string, data };
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setKeySearch: (state, action: PayloadAction<number>) => {
            state.keySearch = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFileById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchFileById.fulfilled, (state, action: PayloadAction<FileData>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchFileById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateFileById.pending, (state) => {
                state.updateError = undefined;
                state.isUpdate = true;
            })
            .addCase(updateFileById.fulfilled, (state) => {
                state.isUpdate = false;
            })
            .addCase(updateFileById.rejected, (state, action) => {
                state.isUpdate = false;
                state.updateError = action.payload;
            });
    },
});

export const { actions: editorActions } = editorSlice;
export const { reducer: editorReducer } = editorSlice;
