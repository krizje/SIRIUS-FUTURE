import { FC } from 'react';

import { Controller, useFormContext } from 'react-hook-form';
import { RadioButton } from '@components/shared/ui/radio-button/radio-button';
import { radioButtonsAnswers } from '@utils/mock';

import styles from './questionnaire-section.module.scss';

interface QuestionnaireSectionProps {
    section: {
        key: string;
        title: string;
        questions: string[];
    };
}

export const QuestionnaireSection: FC<QuestionnaireSectionProps> = ({ section }) => {
    const { control } = useFormContext();
    return (
        <section className={styles.root}>
            <h1 className={styles.title}>{section.title}</h1>
            <div className={styles.inputs}>
                {section.questions.map((question, parentIndex) => {
                    return (
                        <div key={parentIndex} className={styles.question}>
                            <p>{question}</p>
                            <div className={styles.radioGroup}>
                                {radioButtonsAnswers.map((answer, childIndex) => {
                                    return (
                                        <Controller
                                            key={childIndex}
                                            control={control}
                                            name={`${section.key}_${parentIndex + 1}`}
                                            render={({ field: { onChange } }) => (
                                                <RadioButton
                                                    name={`${section.key}_${parentIndex + 1}`}
                                                    label={answer}
                                                    onChange={onChange}
                                                    value={answer}
                                                />
                                            )}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
