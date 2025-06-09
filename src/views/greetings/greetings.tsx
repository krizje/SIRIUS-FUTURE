import { Button } from '@components/shared/ui/button/button';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './greetings.module.scss';

const GreetingsView: FC = () => {
    return (
        <div className={styles.root}>
            <h1 className={styles.title}>Психилогический тест для ребенка</h1>
            <Button>
                <Link to="/test">Начать тест</Link>
            </Button>
        </div>
    );
};

export default GreetingsView;
