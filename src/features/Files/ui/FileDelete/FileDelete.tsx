import classNames from 'classnames';
import { useCallback } from 'react';
import cls from './FileDelete.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import DeleteIcon from '@/shared/assets/icon/delete.svg';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDiapatch/useAppDispatch';
import { deleteFiles } from '../../model/services/deleteFile/deleteFile';

interface FileDeleteProps {
    className?: string;
    filename: string;
}

export const FileDelete: React.FC<FileDeleteProps> = (props) => {
    const {
        className,
        filename,
    } = props;

    const dispatch = useAppDispatch();

    const onClickHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(deleteFiles(filename));
    }, [dispatch, filename]);

    return (
        <Button
            className={classNames(cls.fileDelete, {}, [className])}
            type="button"
            onClick={onClickHandler}
        >
            <DeleteIcon className={cls.icon} />
        </Button>
    );
};
