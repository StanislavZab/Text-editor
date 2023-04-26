import { StateSchema } from '@/app/providers/StoreProvider';

export const getEditorIsUpdate = (state: StateSchema) => state.editor.isUpdate;
