import { useRef } from 'react';
import classNames from 'classnames';
import cls from './Paper.module.scss';

interface PaperProps {
    className?: string;
    value?: string;
    onChange?: (text: string) => void;
}

export const Paper: React.FC<PaperProps> = (props) => {
    const {
        className,
        value,
        onChange,
    } = props;

    const defaultRef = useRef(value);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.innerHTML);
        }
    };

    return (
        <div className={classNames(cls.paper, className)}>
            <span
                contentEditable
                onInput={handleInput}
                dangerouslySetInnerHTML={{ __html: defaultRef.current || ' ' }}
            />
        </div>
    );
};
