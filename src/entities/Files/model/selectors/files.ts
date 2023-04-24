import { StateSchema } from '@/app/providers/StoreProvider';

export const getFilesListData = (state: StateSchema) => state?.filesList?.data;
export const getFilesListIsLoading = (state: StateSchema) => state?.filesList?.isLoading;
export const getFilesListError = (state: StateSchema) => state?.filesList?.error;
