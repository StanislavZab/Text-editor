import classNames from 'classnames';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDiapatch/useAppDispatch';
import { fetchFileById } from '../../models/services/fetchFileById/fetchFileById';
import { getEditorTextFormat } from '../../models/selectors/getEditorTextFormat/getEditorTextFormat';
import { getEditorIsLoading } from '../../models/selectors/getEditorIsLoading/getEditorIsLoading';
import { editorActions } from '../../models/slice/editorSlice';
import { Paper } from '../Paper/Paper';
import { getEditorKeySearch } from '../../models/selectors/getEditorKeySearch/getEditorKeySearch';
import cls from './Editable.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';

interface EditableProps {
    className?: string;
    id?: string;
}

export const Editable: React.FC<EditableProps> = (props) => {
    const {
        className,
        id,
    } = props;

    const dispatch = useAppDispatch();
    const isLoading = useSelector(getEditorIsLoading);
    const text = useSelector(getEditorTextFormat);
    const keySearch = useSelector(getEditorKeySearch);

    useEffect(() => {
        if (id) {
            dispatch(fetchFileById(id));
        }
    }, [dispatch, id]);

    const onInputHandler = (text: string) => {
        dispatch(editorActions.setText(text));
    };

    if (isLoading) {
        return <div className={classNames(cls.editor, className)} />;
    }

    return (
        <HStack justify="center" max className={classNames(cls.editor, className)}>
            <Paper key={keySearch} value={text} onChange={onInputHandler} />
        </HStack>
    );
};
