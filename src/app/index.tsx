import { Suspense } from 'react';
import classnames from 'classnames';
import { AppRouter } from './providers/router';
import './styles/index.scss';

const App = () => (
    <div className={classnames('app')}>
        <Suspense fallback="">
            <AppRouter />
        </Suspense>
    </div>
);

export default App;
