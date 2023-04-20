import classNames from 'classnames';
import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

const MainPage: React.FC<MainPageProps> = (props) => {
    const {
        className,
    } = props;

    return (
        <main className={classNames(cls.main, [className])}>
            <h1>MainPage</h1>
        </main>
    );
};

export default MainPage;
