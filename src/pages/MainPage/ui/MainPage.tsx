import cls from './MainPage.module.scss';
import { FilesList } from '@/entities/Files';
import { AddFile } from '@/features/Files';

const MainPage: React.FC = () => (
    <main className={cls.main}>
        <h1>Список файлов</h1>
        <FilesList AddButton={<AddFile />} />
    </main>
);

export default MainPage;
