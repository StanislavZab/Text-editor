import { createSelector } from '@reduxjs/toolkit';
import { getEditorData } from '../getEditorData/getEditorData';
import { getEditorSearch } from '../getEditorSearch/getEditorSearch';

export const getEditorTextFormat = createSelector(
    getEditorData,
    getEditorSearch,
    (data, search) => {
        let text: string | undefined = '';
        if (search) {
            text = data?.data.replace(new RegExp(search, 'gi'), '<span style="background: yellow; display: inline;">$&</span>');
            text = text?.replace(/\n|\r\n/g, '<br>');
            console.log('search:', search);
        } else {
            text = data?.data.replace(/\n|\r\n/g, '<br>');
            console.log('search: none');
        }

        console.log('selector', text);
        return text;
    },
);
