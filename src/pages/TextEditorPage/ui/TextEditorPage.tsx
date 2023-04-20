import { useParams } from 'react-router-dom';
import cls from './TextEditorPage.module.scss';

const TextEditorPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <main className={cls.textEditorPage}>
            <h1>TextEditorPage</h1>
            {id}
        </main>
    );
};

export default TextEditorPage;
