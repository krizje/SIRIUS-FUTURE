import { CreateSurveyDto, SurveyDto } from '@shared-types/survey';
import { CreateUploadDto, UploadDto } from '@shared-types/upload';
/*
    ---------------------------- 
    --------- upload -----------
    ---------------------------- 
*/

// POST - /upload
export type UploadImagesResponse = UploadDto;
export type UploadImagesPayload = CreateUploadDto;

/*
    ---------------------------- 
    --------- survey -----------
    ---------------------------- 
*/

// POST - /upload-survey
export type UploadSurveyResponse = SurveyDto;
export type UploadSurveyPayload = CreateSurveyDto;
