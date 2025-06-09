import { FC, JSX } from 'react';
import styles from './step-controls.module.scss';
import { Button } from '@components/shared/ui/button/button';

import { Icon } from '@components/shared/icon/icon';
import { useShareOrDownload } from '@hooks/useShareOrDownload';
import { Loader } from '@components/shared/loader/laoder';

interface StepControlsProps {
    step: number;
    maxSteps: number;
    button: JSX.Element;
    onPrevClick: () => void;
}

export const StepControls: FC<StepControlsProps> = ({ step, maxSteps, button, onPrevClick }) => {
    const { isLoading, handleDownload } = useShareOrDownload();
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
                {step == 3 && (
                    <Button onClick={handleDownload} classes={{ root: styles.downloadButton }}>
                        Скачать отчет PDF {isLoading ? <Loader /> : <Icon name="download" />}
                    </Button>
                )}
                {button}
            </div>
        </div>
    );
};
