import { FC, useEffect, useState } from 'react';
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
import { SurveyFieldsDto, SurveyFieldsSchema } from '@shared-types/survey'; //FormValuesSchema
import { setTaskInfo, useTask } from '@store/slices/task-slice';
import { Button } from '@components/shared/ui/button/button';
import { Loader } from '@components/shared/loader/laoder';
import { useUploadSurveyMutation } from '@api/services/survey-service';
import { CreateUploadDto, CreateUploadSchema } from '@shared-types/upload';
import { GetResults } from '../steps/get-results/get-results';
import { useShareOrDownload } from '@hooks/useShareOrDownload';

export const FormControls: FC = () => {
    const [step, setStep] = useState(1);
    const { task_id } = useTask();
    const dispatch = useDispatch();

    const { isLoading, handleShare } = useShareOrDownload();

    const [uploadImages, { isLoading: isUploadFilesLoading }] = useUploadImagesMutation();
    const [uploadSurvey, { isLoading: isUploadSurveyLoading }] = useUploadSurveyMutation();

    const filesForm = useForm<CreateUploadDto>({
        mode: 'all',
        defaultValues: {
            files: [undefined, undefined, undefined],
        },
        resolver: zodResolver(CreateUploadSchema),
    });

    const surveyForm = useForm<SurveyFieldsDto>({
        mode: 'onChange',
        defaultValues: {
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
        resolver: zodResolver(SurveyFieldsSchema),
    });

    useEffect(() => {
        filesForm.trigger();
        surveyForm.trigger();
    }, []);

    const onFilesSubmit = async (data: CreateUploadDto) => {
        const formData = new FormData();

        data.files.forEach((file) => {
            if (file) formData.append('files', file);
        });

        try {
            const response = await uploadImages(formData).unwrap();
            dispatch(setTaskInfo(response));

            setStep((prev) => prev + 1);
        } catch (err) {
            throw new Error((err as Error).message);
        }
    };

    const onSurveySubmit = async (data: SurveyFieldsDto) => {
        if (task_id) {
            const payload = {
                task_id: task_id,
                survey: data,
            };

            try {
                await uploadSurvey(payload).unwrap();
                setStep((step) => step + 1);
            } catch (err) {
                throw new Error((err as Error).message);
            }
        }
    };

    const isFilesFormValid = Boolean(filesForm.formState.errors.files);
    const isSurveyFormValid = Boolean(Object.keys(surveyForm.formState.errors).length);

    const steps = [
        <FormProvider {...filesForm} control={filesForm.control} key={'uploadFilesStep'}>
            <form id="fileForm" className={styles.root} onSubmit={filesForm.handleSubmit(onFilesSubmit)}>
                <div className={styles.content}>
                    <UploadFilesStep />
                </div>
            </form>
        </FormProvider>,
        <FormProvider {...surveyForm} control={surveyForm.control} key={'questionnaire'}>
            <form id="surveyForm" className={styles.root} onSubmit={surveyForm.handleSubmit(onSurveySubmit)}>
                <div className={styles.content}>
                    <Questionnaire />
                </div>
            </form>
        </FormProvider>,
        <div className={styles.root} key={'getResults'}>
            <GetResults />
        </div>,
    ];

    const buttonControls = [
        <Button key={'fileForm'} form="fileForm" type="submit" disabled={isFilesFormValid}>
            Далее {isUploadFilesLoading ? <Loader /> : <Icon name="arrow_right" className={styles.arrowRightIcon} />}
        </Button>,
        <Button key={'surveyForm'} form="surveyForm" type="submit" disabled={isSurveyFormValid}>
            Узнать результаты{' '}
            {isUploadSurveyLoading ? <Loader /> : <Icon name="chevron_right" className={styles.chevronRightIcon} />}
        </Button>,
        <Button key={'share'} onClick={handleShare} classes={{ root: styles.shareButton }}>
            Поделиться результатами
            {isUploadSurveyLoading ? <Loader /> : <Icon name="share" className={styles.chevronRightIcon} />}
        </Button>,
    ];

    return (
        <>
            <StepProgress step={step} maxSteps={3} />
            {steps[step - 1]}
            <StepControls
                step={step}
                maxSteps={3}
                button={buttonControls[step - 1]}
                onPrevClick={() => setStep((prev) => prev - 1)}
            />
        </>
    );
};
