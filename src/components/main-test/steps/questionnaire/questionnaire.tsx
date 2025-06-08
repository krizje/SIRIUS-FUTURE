import { FC, useState } from 'react';
import { questionnaire } from '@utils/constants';

import { Input } from '@components/shared/ui/input/input';
import { Controller, useFormContext } from 'react-hook-form';

import { ru } from 'date-fns/locale/ru';

import { Datepicker } from '@components/shared/ui/datepicker/datepicker';
import { format } from 'date-fns';
import { RadioButton } from '@components/shared/ui/radio-button/radio-button';
import { InfoBanner } from './info-banner/info-banner';
import { QuestionnaireSection } from './questionnaire-section/questionnaire-section';
import { Textarea } from '@components/shared/ui/text-area/text-area';

import styles from './questionnaire.module.scss';

export const Questionnaire: FC = () => {
    const { control } = useFormContext();

    const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);

    return (
        <div className={styles.root}>
            <section className={styles.childInfo}>
                <h1 className={styles.title}>Общая информация о ребенке</h1>
                <div className={styles.inputs}>
                    <Controller
                        control={control}
                        name="survey.childName"
                        render={({ field: { onChange } }) => (
                            <Input onChange={onChange} labelText="Имя ребенка" placeholder=" " />
                        )}
                    />

                    <Controller
                        control={control}
                        name="survey.childDOB"
                        render={({ field: { onChange, value } }) => {
                            return (
                                <div className={styles.dateWrapper}>
                                    <Input
                                        classes={{ input: styles.dateInput }}
                                        labelText="Дата рождения ребенка"
                                        value={value}
                                        readOnly
                                        onClick={() => setIsDatePickerOpen(true)}
                                    />
                                    {isDatePickerOpen && (
                                        <div className={styles.datePickerWrapper}>
                                            <Datepicker
                                                navLayout="around"
                                                mode="single"
                                                locale={ru}
                                                onSelect={(date) => {
                                                    if (date) {
                                                        onChange(format(date, 'MM.dd.yyyy'));
                                                        setIsDatePickerOpen(false);
                                                    }
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                            );
                        }}
                    />
                </div>

                <div className={styles.radioGroupWrapper}>
                    <p className={styles.text}>Пол ребёнка</p>
                    <Controller
                        control={control}
                        name="survey.childGender"
                        render={({ field: { onChange } }) => {
                            return (
                                <div className={styles.radioGroup}>
                                    <RadioButton
                                        label="Мальчик"
                                        value="Мальчик"
                                        name="group"
                                        defaultChecked={true}
                                        onChange={onChange}
                                    />
                                    <RadioButton label="Девочка" value="Девочка" name="group" onChange={onChange} />
                                </div>
                            );
                        }}
                    />
                </div>

                <Controller
                    control={control}
                    name="survey.parentName"
                    render={({ field: { onChange } }) => (
                        <Input onChange={onChange} labelText="Имя родителя, заполняющего анкету" placeholder=" " />
                    )}
                />
            </section>

            <InfoBanner />

            {questionnaire.map((section) => (
                <QuestionnaireSection key={section.key} section={section} />
            ))}

            <section className={styles.childInfo}>
                <h1 className={styles.title}>Раздел 5. Общие вопросы</h1>
                <div className={styles.inputs}>
                    <div className={styles.radioGroupWrapper}>
                        <p className={styles.text}>Как Вы оцениваете общее эмоциональное состояние вашего ребенка?</p>
                        <div className={styles.radioGroup}>
                            {['Отличное', 'Хорошее', 'Удовлетворительное', 'Неудовлетворительное', 'Очень плохое'].map(
                                (question, index) => (
                                    <Controller
                                        key={index}
                                        control={control}
                                        name="survey.emotionalState"
                                        render={({ field: { onChange } }) => {
                                            return (
                                                <RadioButton
                                                    label={question}
                                                    value={question}
                                                    name="emotionalState"
                                                    onChange={onChange}
                                                />
                                            );
                                        }}
                                    />
                                ),
                            )}
                        </div>
                    </div>
                    {[
                        'Есть ли у Вашего ребенка какие-либо особенности развития или поведения, о которых Вы хотели бы сообщить дополнительно?',
                        'Какие, на Ваш взгляд, сильные стороны и таланты есть у Вашего ребенка?',
                        'Какие, на Ваш взгляд, области требуют особого внимания и развития у Вашего ребенка?',
                        'Обращались ли Вы ранее к специалистам (психологу, неврологу, логопеду) по поводу развития или поведения Вашего ребенка?',
                    ].map((question, index) => (
                        <div className={styles.inputs} key={index}>
                            <p className={styles.text}>{question}</p>
                            <Controller
                                control={control}
                                name={`survey.q5_${(index + 1) as 1 | 2 | 3 | 4}`}
                                render={({ field: { onChange } }) => <Textarea height={96} onChange={onChange} />}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
