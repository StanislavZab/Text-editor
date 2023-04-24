export interface File {
    name: string;
    extension: string;
    fileSizeInBytes: string;
}

export interface FilesListSchema {
    isLoading: boolean;
    error?: string;
    data?: File[];
}
