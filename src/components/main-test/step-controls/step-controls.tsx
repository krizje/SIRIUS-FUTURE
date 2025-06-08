import { FC, JSX } from 'react';
import styles from './step-controls.module.scss';
import { Button } from '@components/shared/ui/button/button';

import { Icon } from '@components/shared/icon/icon';

interface StepControlsProps {
    step: number;
    maxSteps: number;
    button: JSX.Element;
    onNextClick: () => void;
    onPrevClick: () => void;
}

export const StepControls: FC<StepControlsProps> = ({ step, maxSteps, button, onNextClick, onPrevClick }) => {
    return (
        <div className={styles.root}>
            <span className={styles.step}>
                Шаг&nbsp;{step}/{maxSteps}
            </span>
            <div className={styles.buttons}>
                {step === 2 && (
                    <Button onClick={onPrevClick} classes={{ root: styles.backButton }}>
                        <Icon name="chevron_left" className={styles.chevronLeftIcon} /> К загрузке рисунков
                    </Button>
                )}
                {button}
            </div>
        </div>
    );
};
