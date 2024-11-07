import React from 'react';
import InputDate from '../common/CommonInput/InputDate/InputDate';
import InputTitle from '../common/CommonInput/InputTitle/InputTitle';
import InputContent from '../common/CommonInput/InputContent/InputContent';
import InputWeather from '../common/CommonInput/InputWeather/InputWeather';
import InputMood from '../common/CommonInput/InputMood/InputMood';
import InputImg from '../common/CommonInput/InputImg/InputImg';
import InputPublic from '../common/CommonInput/InputPublic/InputPublic';

interface DiaryFormProps {
  diaryDate: Date;
  setDiaryDate: React.Dispatch<React.SetStateAction<Date>>;
  weather: string;
  setWeather: React.Dispatch<React.SetStateAction<string>>;
  mood: string;
  setMood: React.Dispatch<React.SetStateAction<string>>;
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  isPublic: boolean;
  setIsPublic: React.Dispatch<React.SetStateAction<boolean>>;
}

const DiaryForm: React.FC<DiaryFormProps> = ({
  diaryDate,
  setDiaryDate,
  weather,
  setWeather,
  mood,
  setMood,
  images,
  setImages,
  title,
  setTitle,
  content,
  setContent,
  isPublic,
  setIsPublic,
}) => {
  return (
    <>
      <InputDate diaryDate={diaryDate} setDiaryDate={setDiaryDate} />
      <InputWeather weather={weather} setWeather={setWeather} />
      <InputMood mood={mood} setMood={setMood} />
      <InputImg images={images} setImages={setImages} />
      <InputTitle title={title} setTitle={setTitle} />
      <InputContent content={content} setContent={setContent} />
      <InputPublic isPublic={isPublic} setIsPublic={setIsPublic} />
    </>
  );
};

export default DiaryForm;
