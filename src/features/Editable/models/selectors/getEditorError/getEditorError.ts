import { StateSchema } from '@/app/providers/StoreProvider';

export const getEditorError = (state: StateSchema) => state?.editor?.error;
