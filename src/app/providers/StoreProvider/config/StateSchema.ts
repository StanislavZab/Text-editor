import { AxiosInstance } from 'axios';
import { FilesListSchema } from '@/entities/Files';

export interface StateSchema {
    filesList: FilesListSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
