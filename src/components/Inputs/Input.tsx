import React from "react";
import {
  FieldValues,
  InternalFieldName,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";
import { Typography } from "../../styles/typography";
interface iInput {
  className?: string;
  title: string;
  register?: UseFormRegisterReturn;
  error?: any;
  type?: string;
  placeholder?: string;
}
const Input = ({
  className,
  title,
  register,
  error,
  type,
  placeholder,
  ...res
}: iInput) => {
  return (
    <label className={className}>
      <Typography tag="h2" typography="headline" color="#ffffff">
        {title}
      </Typography>
      <input {...register} {...res} type={type} />
      <Typography tag="h2" typography="headline" color="#ffffff">
        {error}
      </Typography>
    </label>
  );
};

export default Input;
