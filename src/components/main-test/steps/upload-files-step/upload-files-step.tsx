import styles from './upload-file-step.module.scss';
import { Icon } from '@components/shared/icon/icon';
import { InputContainer } from './input-container/input-container';
import { Controller, useFormContext } from 'react-hook-form';
import { CreateUploadDto } from '@shared-types/upload';

export const UploadFilesStep = () => {
    const { control, watch } = useFormContext<CreateUploadDto>();

    return (
        <section className={styles.root}>
            <div className={styles.header}>
                <h1 className={styles.title}>Загрузите фотографии рисунков</h1>
                <div className={styles.alertContainer}>
                    <Icon name="alert" className={styles.alertIcon} />
                    <span>Допустимые форматы файлов: jpg, jpeg, png, pdf. Размер не более 5 Мб</span>
                </div>
            </div>
            <div className={styles.inputs}>
                {['Дом, дерево, человек', 'Несуществующее животное', 'Автопортрет'].map((input, index) => {
                    const file = watch('files')?.[index];
                    const fileUrl = file && URL.createObjectURL(file);

                    return (
                        <Controller
                            name={`files.${index}`}
                            key={index}
                            control={control}
                            render={({ field: { onChange } }) => (
                                <InputContainer onChange={onChange} key={index} title={input} fileUrl={fileUrl} />
                            )}
                        />
                    );
                })}
            </div>
        </section>
    );
};
