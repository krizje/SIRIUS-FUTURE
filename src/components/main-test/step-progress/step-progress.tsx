import React, { FC } from 'react';
import styles from './step-progress.module.scss';

interface StepProgressProps {
    step: number;
    maxSteps: number;
}

export const StepProgress: FC<StepProgressProps> = ({ step, maxSteps }) => {
    return (
        <div className={styles.root}>
            <progress className={styles.progress} value={(step / maxSteps) * 100} max={100}></progress>
        </div>
    );
};
