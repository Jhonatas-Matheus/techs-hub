import React from "react";
import { Typography } from "../styles/typography";

interface iFormProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  onSubmit: () => void;
}

const Form = ({ title, children, className, ...res }: iFormProps) => {
  return (
    <form className={className} {...res}>
      <Typography tag="h2" typography="title1" color="grey-zero">
        {title}
      </Typography>
      {children}
    </form>
  );
};

export default Form;
