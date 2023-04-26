import { AxiosInstance } from 'axios';
import { FilesListSchema } from '@/entities/Files';
import { EditorSchema } from '@/features/Editable';
import { FileSchema } from '@/features/Files';

export interface StateSchema {
    filesList: FilesListSchema;
    editor: EditorSchema;
    file: FileSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
