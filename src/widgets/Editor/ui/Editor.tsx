import classNames from 'classnames';
// import cls from './Editor.module.scss';
import { useSelector } from 'react-redux';
import { HStack, VStack } from '@/shared/ui/Stack';
import {
    ButtonSaveFile, Editable, SearchWord, getEditorFilename,
} from '@/features/Editable';

interface EditorProps {
    className?: string;
    id?: string;
}

export const Editor: React.FC<EditorProps> = (props) => {
    const {
        className,
        id,
    } = props;

    const filename = useSelector(getEditorFilename);

    return (
        <VStack max className={classNames(className)}>
            <HStack max justify="center">
                <h3>{filename}</h3>
            </HStack>
            <HStack max justify="end" gap="16" align="center">
                <ButtonSaveFile id={id} />
                <SearchWord />
            </HStack>
            <Editable id={id} />
        </VStack>
    );
};
