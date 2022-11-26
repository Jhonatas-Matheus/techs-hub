import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Typography } from "../../styles/typography";
interface iSelectProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  register?: UseFormRegisterReturn;
  error?: Function;
}
const Select = ({
  children,
  className,
  title,
  register,
  error,
  ...res
}: iSelectProps) => {
  return (
    <label className={className}>
      <Typography tag="h2" typography="headline" color="#ffffff">
        {title}
      </Typography>
      <select {...res} {...register}>
        {children}
      </select>
    </label>
  );
};

export default Select;
