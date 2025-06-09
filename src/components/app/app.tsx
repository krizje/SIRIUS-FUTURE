import { RouterProvider } from 'react-router-dom';
import { router } from '@router/router';

import styles from './app.module.scss';

export const App = () => {
    return (
        <div className={styles.root}>
            <RouterProvider router={router} />
        </div>
    );
};
