import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';

import './index.scss';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
);
