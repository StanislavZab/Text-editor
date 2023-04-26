import { createSelector } from '@reduxjs/toolkit';
import { getEditorData } from '../getEditorData/getEditorData';

export const getEditorFilename = createSelector(
    getEditorData,
    (data) => data?.filename,
);
