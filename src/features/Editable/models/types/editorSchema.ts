export interface FileData {
    filename: string;
    data: string;
}

export interface EditorSchema {
    search?: string;
    keySearch?: number;
    isLoading?: boolean;
    data?: FileData;
    error?: string;
    isUpdate?: boolean;
    updateError?: string;
}
