import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { $api } from '@/shared/api/api';
import { StateSchema } from './StateSchema';
import { filesListReducer } from '@/entities/Files';
import { editorReducer } from '@/features/Editable';
import { fileReducer } from '@/features/Files';

const rootReducers: ReducersMapObject<StateSchema> = {
    filesList: filesListReducer,
    editor: editorReducer,
    file: fileReducer,
};

export const store = configureStore({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    // preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                api: $api,
            },
        },
    }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
