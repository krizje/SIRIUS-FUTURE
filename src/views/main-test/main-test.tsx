import React, { FC } from 'react';

import styles from './main-test.module.scss';
import { FormControls } from '@components/main-test/form-controls/form-controls';

const MainTest: FC = () => {
    return (
        <div className={styles.root}>
            <FormControls />
        </div>
    );
};

export default MainTest;
