import React, { FC } from 'react';

import styles from './main-test.module.scss';
import { FormControls } from '@components/main-test/form-controls/form-controls';

const MainTestView: FC = () => {
    return (
        <div className={styles.root}>
            <FormControls />
        </div>
    );
};

export default MainTestView;
