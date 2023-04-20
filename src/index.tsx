import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';

const component = document.getElementById('root');

if (!component) {
    throw new Error('Не найден root. Приложению не удалось вмонтироваться!');
}

ReactDOM.createRoot(component).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
);
