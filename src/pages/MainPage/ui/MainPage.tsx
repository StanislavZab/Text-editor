import { useState } from 'react';
import cls from './MainPage.module.scss';

const MainPage: React.FC = (props) => {
    const [test, setTest] = useState();

    return (
        <main className={cls.main}>
            <h1>MainPage</h1>
        </main>
    );
};

export default MainPage;
