import { StateSchema } from '@/app/providers/StoreProvider';

export const getEditorIsLoading = (state: StateSchema) => state?.editor?.isLoading;
