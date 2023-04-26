import classNames from 'classnames';
import { ReactNode } from 'react';
import cls from './FilesListItem.module.scss';
import DocumentIcon from '@/shared/assets/icon/document.svg';
import { File } from '../../model/types/filesListSchema';
import { Text } from '@/shared/ui/Text/Text';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

interface FilesListItemProps {
    className?: string;
    item: File;
    Delete?: ReactNode;
}

export const FilesListItem: React.FC<FilesListItemProps> = (props) => {
    const {
        className,
        item,
        Delete,
    } = props;

    return (
        <AppLink
            to={RoutePath.file_edit + item.id}
            className={classNames(cls.filesListItem, className)}
        >
            <div className={cls.filename}>
                <DocumentIcon className={cls.icon} />
                <Text title={item.name} />
            </div>
            <div className={cls.size}>
                <Text title={item.size} className={cls.size} />
            </div>
            <div className={cls.delete}>
                {Delete}
            </div>
        </AppLink>
    );
};
