import classNames from 'classnames';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDiapatch/useAppDispatch';
import SaveIcon from '@/shared/assets/icon/save.svg';
import { updateFileById } from '../../models/services/updateFileById/updateFileById';
import { getEditorIsUpdate } from '../../models/selectors/getEditorIsUpdate/getEditorIsUpdate';

interface ButtonSaveFileProps {
    className?: string;
    id?: string;
}

export const ButtonSaveFile: React.FC<ButtonSaveFileProps> = (props) => {
    const {
        className,
        id,
    } = props;

    const dispatch = useAppDispatch();
    const isUpdate = useSelector(getEditorIsUpdate);

    const handlerSave = useCallback(() => {
        if (id) {
            dispatch(updateFileById(id));
        }
    }, [dispatch, id]);

    return (
        <div className={classNames(className)}>
            <Button
                disabled={isUpdate}
                onClick={handlerSave}
                theme={ButtonTheme.BACKGROUND}
            >
                <SaveIcon width={30} height={30} />
            </Button>
        </div>
    );
};
