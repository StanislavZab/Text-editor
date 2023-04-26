import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { getEditorSearch } from '../../models/selectors/getEditorSearch/getEditorSearch';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDiapatch/useAppDispatch';
import { editorActions } from '../../models/slice/editorSlice';

interface SearchWordProps {
    className?: string;
}

export const SearchWord: React.FC<SearchWordProps> = (props) => {
    const {
        className,
    } = props;

    const dispatch = useAppDispatch();
    const search = useSelector(getEditorSearch);

    const onChangeHendler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(editorActions.setSearch(e.target.value));
        dispatch(editorActions.setKeySearch(Math.random()));
    }, [dispatch]);

    return (
        <div className={classNames(className)}>
            <input
                value={search}
                onChange={onChangeHendler}
                type="search"
                placeholder="Введите слово"
            />
        </div>
    );
};
