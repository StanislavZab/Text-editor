import { StateSchema } from '@/app/providers/StoreProvider';

export const getEditorSearch = (state: StateSchema) => state.editor.search;
