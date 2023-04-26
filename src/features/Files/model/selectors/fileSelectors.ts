import { StateSchema } from '@/app/providers/StoreProvider';

export const getFileIsDelete = (state: StateSchema) => state.file.isDelete;
export const getFileError = (state: StateSchema) => state.file.error;
