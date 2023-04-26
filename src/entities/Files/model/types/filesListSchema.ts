export interface File {
    name: string;
    id: string;
    size: string;
}

export interface FilesListSchema {
    isLoading: boolean;
    error?: string;
    data?: File[];
}
