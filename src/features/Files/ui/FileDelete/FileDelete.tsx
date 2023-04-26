import classNames from 'classnames';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import cls from './FileDelete.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import DeleteIcon from '@/shared/assets/icon/delete.svg';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDiapatch/useAppDispatch';
import { deleteFiles } from '../../model/services/deleteFile/deleteFile';
import { getFileIsDelete } from '../../model/selectors/fileSelectors';

interface FileDeleteProps {
    className?: string;
    id: string;
}

export const FileDelete: React.FC<FileDeleteProps> = (props) => {
    const {
        className,
        id,
    } = props;

    const dispatch = useAppDispatch();
    const isDelete = useSelector(getFileIsDelete);

    const onClickHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(deleteFiles(id));
    }, [dispatch, id]);

    return (
        <Button
            disabled={isDelete}
            className={classNames(cls.fileDelete, {}, [className])}
            type="button"
            onClick={onClickHandler}
        >
            <DeleteIcon className={cls.icon} />
        </Button>
    );
};
