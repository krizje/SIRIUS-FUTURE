import { FC, useRef, useState } from 'react';
import { Icon } from '@components/shared/icon/icon';
import styles from './input-container.module.scss';
import { Button } from '@components/shared/ui/button/button';

interface InputContainerProps {
    title: string;
    onChange: (file: File | null) => void;
}

export const InputContainer: FC<InputContainerProps> = ({ title, onChange }) => {
    const inputFile = useRef<HTMLInputElement>(null);
    const [fileUrl, setFileUrl] = useState<string | null>(null);

    const handleUploadClick = () => {
        if (!inputFile.current) return;

        inputFile.current.click();
    };

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <Button classes={{ root: styles.uploadButton }} onClick={handleUploadClick}>
                    <Icon name={!fileUrl ? 'upload' : 'refresh'} className={styles.icon} />
                </Button>

                <input
                    type="file"
                    className={styles.input}
                    ref={inputFile}
                    accept=".png, .jpeg, .png, .pdf"
                    onChange={(e) => {
                        const file = e.target.files?.[0];

                        if (file) {
                            console.log(file);

                            onChange(file);
                            setFileUrl(URL.createObjectURL(file));
                        }
                    }}
                />
                {fileUrl && <img className={styles.preview} src={fileUrl} width={50} height={50} />}
            </div>
            <span className={styles.title}>{title}</span>
        </div>
    );
};
