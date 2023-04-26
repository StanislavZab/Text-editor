import classNames from 'classnames';
import { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import cls from './FilesList.module.scss';
import { FilesListItem } from '../FilesListItem/FilesListItem';
import { File } from '../../model/types/filesListSchema';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { FileDelete } from '@/features/Files';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDiapatch/useAppDispatch';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { fetchFilesList } from '../../model/services/fetchFilesList';
import { getFilesListData, getFilesListError, getFilesListIsLoading } from '../../model/selectors/files';

interface FilesListProps {
    className?: string;
    AddButton: ReactNode;
}

export const FilesList: React.FC<FilesListProps> = (props) => {
    const {
        className,
        AddButton,
    } = props;

    const dispatch = useAppDispatch();
    const isLoading = useSelector(getFilesListIsLoading);
    const error = useSelector(getFilesListError);
    const data = useSelector(getFilesListData);

    useEffect(() => {
        dispatch(fetchFilesList());
    }, [dispatch]);

    if (isLoading && !data) {
        return (
            <div className={classNames(cls.filesList, className)}>
                <Skeleton width="100%" height={40} />
                <Skeleton width="100%" height={40} />
                <Skeleton width="100%" height={40} />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.filesList, className)}>
                <Text title={error} theme={TextTheme.ERROR} />
            </div>
        );
    }
    return (
        <div className={classNames(cls.filesList, className)}>
            <div className={cls.title}>
                <div className={cls.name}>
                    <Text title="Имя" />
                </div>
                <div>
                    <Text title="Размер" className={cls.size} />
                </div>
                <div className={cls.add}>
                    {AddButton}
                </div>
            </div>
            {data?.map((item) => (
                <FilesListItem
                    key={item.name}
                    item={item}
                    Delete={<FileDelete id={item.id} />}
                />
            ))}
        </div>
    );
};
