import classNames from 'classnames';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
    const {
        className,
    } = props;

    return (
        <header className={classNames(cls.navbar, [className])}>
            Navbar
        </header>
    );
};
