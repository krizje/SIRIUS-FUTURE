import React, { FC, useEffect, useState } from 'react';
import styles from './form-controls.module.scss';
import { FormProvider, useForm } from 'react-hook-form';
import { StepControls } from '../step-controls/step-controls';
import { StepProgress } from '../step-progress/step-progress';
import { UploadFilesStep } from '../steps/upload-files-step/upload-files-step';
import { Icon } from '@components/shared/icon/icon';
import { useUploadImagesMutation } from '@api/services/upload-service';
import { useDispatch } from 'react-redux';

import { zodResolver } from '@hookform/resolvers/zod';
import { Questionnaire } from '../steps/questionnaire/questionnaire';
import { FormValuesDto, FormValuesSchema } from '@shared-types/survey';
import { setTaskInfo } from '@store/slices/task-slice';
import { Button } from '@components/shared/ui/button/button';
import { Loader } from '@components/shared/loader/laoder';
import { useUploadSurveyMutation } from '@api/services/survey-service';

//  const test = async () => {
//         if (task_id) {
//             const response = await fetch('https://sirius-draw-test-94500a1b4a2f.herokuapp.com/submit-survey', {
//                 method: 'POST',
//                 body: JSON.stringify({ task_id: task_id }),
//             });

//             const data = await response.json();
//         }
//     };

export const FormControls: FC = () => {
    const [step, setStep] = useState(1);
    //const { task_id } = useTask();
    const dispatch = useDispatch();

    const [uploadImages, { isLoading: isUploadFilesLoading }] = useUploadImagesMutation();
    const [uploadSurvey, { isLoading: isUploadSurveyLoading }] = useUploadSurveyMutation();

    const methods = useForm<FormValuesDto>({
        mode: 'onChange',
        defaultValues: {
            files: [undefined, undefined, undefined],
            survey: {
                childGender: 'Мальчик',

                q1_5: '1',
                q1_6: '1',
                q1_7: '1',
                q1_8: '1',
                q1_9: '1',
                q1_10: '1',

                q2_5: '1',
                q2_6: '1',
                q2_7: '1',
                q2_8: '1',
                q2_9: '1',
                q2_10: '1',

                q3_5: '1',
                q3_6: '1',
                q3_7: '1',
                q3_8: '1',
                q3_9: '1',
                q3_10: '1',

                q4_5: '1',
                q4_6: '1',
                q4_7: '1',
                q4_8: '1',
                q4_9: '1',
                q4_10: '1',

                q5_5: '1',
                q5_6: '1',
                q5_7: '1',
                q5_8: '1',
                q5_9: '1',
                q5_10: '1',
            },
        },
        resolver: zodResolver(FormValuesSchema),
    });

    useEffect(() => {
        methods.trigger();
    }, []);

    const files = methods.watch('files');
    const survey = methods.watch();

    const steps = [<UploadFilesStep key={'UploadFilesStep'} />, <Questionnaire key={'questionare'} />];

    const handleFirstStepNextClick = async () => {
        const formData = new FormData();

        files.forEach((file) => {
            if (file) formData.append('files', file);
        });

        try {
            const data = await uploadImages(formData).unwrap();

            dispatch(setTaskInfo(data));
            setStep((prev) => prev + 1);
        } catch (err) {
            throw new Error((err as Error).message);
        }
    };

    const onSubmit = async (data: FormValuesDto) => {
        switch (step) {
            case 1:
                await handleFirstStepNextClick();
                return;
            case 2:
                console.log(data);
                return;
        }
    };

    const buttonControls = [
        <Button
            key={'step1'}
            disabled={files.some((file) => !file)}
            onClick={(e) => {
                e.preventDefault();
                methods.handleSubmit(onSubmit);
            }}
        >
            Далее {isUploadFilesLoading ? <Loader /> : <Icon name="arrow_right" className={styles.arrowRightIcon} />}
        </Button>,
        <Button form="submitForm" key={'step2'} type="submit" disabled={!!methods.formState.errors.survey}>
            Узнать результаты <Icon name="chevron_right" className={styles.chevronRightIcon} />
        </Button>,
    ];

    return (
        <FormProvider {...methods} control={methods.control}>
            <StepProgress step={step} maxSteps={3} />
            <form id="submitForm" className={styles.root}>
                <div className={styles.content}>{steps[step - 1]}</div>
            </form>
            <StepControls
                step={step}
                maxSteps={3}
                button={buttonControls[step - 1]}
                onNextClick={() => setStep((prev) => prev + 1)}
                onPrevClick={() => setStep((prev) => prev - 1)}
            />
        </FormProvider>
    );
};
