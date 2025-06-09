import { FC, useRef } from 'react';
import { Icon } from '@components/shared/icon/icon';
import styles from './input-container.module.scss';
import { Button } from '@components/shared/ui/button/button';

interface InputContainerProps {
    title: string;
    fileUrl: string;
    onChange: (file: File | null) => void;
}

export const InputContainer: FC<InputContainerProps> = ({ title, onChange, fileUrl }) => {
    const inputFile = useRef<HTMLInputElement>(null);

    const handleUploadClick = () => {
        if (!inputFile.current) return;

        inputFile.current.click();
    };

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <Button type="button" classes={{ root: styles.uploadButton }} onClick={handleUploadClick}>
                    <Icon name={!fileUrl ? 'upload' : 'refresh'} className={styles.icon} />
                </Button>

                <input
                    type="file"
                    className={styles.input}
                    ref={inputFile}
                    accept=".png, .jpeg, .png, .pdf"
                    onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) onChange(file);
                    }}
                />
                {fileUrl && <img className={styles.preview} src={fileUrl} />}
            </div>
            <span className={styles.title}>{title}</span>
        </div>
    );
};
