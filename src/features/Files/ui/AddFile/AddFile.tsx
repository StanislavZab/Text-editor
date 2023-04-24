import classNames from 'classnames';
import { useCallback, useRef } from 'react';
import cls from './AddFile.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { addFile } from '../../model/services/addFile/addFile';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDiapatch/useAppDispatch';

interface AddFileProps {
    className?: string;
}

export const AddFile: React.FC<AddFileProps> = (props) => {
    const {
        className,
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();

    const buttonHendler = useCallback(() => {
        inputRef.current?.click();
    }, []);

    const inputHandle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files) {
            const formData = new FormData();
            formData.append('file', e.target.files[0]);

            dispatch(addFile(formData));
        }
    }, [dispatch]);

    return (
        <div className={classNames(cls.addFile, {}, [className])}>
            <input
                className={cls.hidden}
                type="file"
                onChange={inputHandle}
                accept=".txt"
                ref={inputRef}
            />
            <Button onClick={buttonHendler}>Добавить файл</Button>
        </div>
    );
};
