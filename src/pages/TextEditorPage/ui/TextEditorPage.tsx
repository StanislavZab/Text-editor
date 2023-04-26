import { useParams } from 'react-router-dom';
import cls from './TextEditorPage.module.scss';
import { Editor } from '@/widgets/Editor';
import { HStack } from '@/shared/ui/Stack';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

const TextEditorPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <main className={cls.textEditorPage}>
            <HStack max align="center" justify="between">
                <AppLink to={RoutePath.main}>Назад</AppLink>
                <h1>Текстовый редактор</h1>
            </HStack>
            <Editor id={id} />
        </main>
    );
};

export default TextEditorPage;
