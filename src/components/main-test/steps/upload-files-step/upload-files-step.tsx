import styles from './upload-file-step.module.scss';
import { Icon } from '@components/shared/icon/icon';
import { InputContainer } from './input-container/input-container';
import { Controller, useFormContext } from 'react-hook-form';

export const UploadFilesStep = () => {
    const inputs = ['Дом, дерево, человек', 'Несуществующее животное', 'Автопортрет'];

    const { control } = useFormContext();

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <h1 className={styles.title}>Загрузите фотографии рисунков</h1>
                <div className={styles.alertContainer}>
                    <Icon name="alert" className={styles.alertIcon} />
                    <span>Допустимые форматы файлов: jpg, jpeg, png, pdf. Размер не более 5 Мб</span>
                </div>
            </div>
            <div className={styles.inputs}>
                {inputs.map((input, index) => (
                    <Controller
                        name={`files.${index}`}
                        key={index}
                        control={control}
                        render={({ field: { onChange } }) => (
                            <InputContainer onChange={onChange} key={index} title={input} />
                        )}
                    />
                ))}
            </div>
        </div>
    );
};
