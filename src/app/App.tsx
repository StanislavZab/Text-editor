import { Suspense } from 'react';
import { Navbar } from 'widgets/Navbar';
import classnames from 'classnames';
import { AppRouter } from './providers/router';
import './styles/index.scss';

const App = () => (
    <div className={classnames('app')}>
        <Suspense fallback="">
            <Navbar />
            <AppRouter />
        </Suspense>
    </div>
);

export default App;
