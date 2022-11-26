import React from "react";
import { isButtonElement } from "react-router-dom/dist/dom";
import { StyledButton } from "./style";
interface iButton {
  children?: React.ReactNode;
  className?: string;
  primary?: string;
  secundary?: string;
  onClick: () => void;
  type: "button" | "submit" | "reset" | undefined;
}
const Button = ({
  children,
  className,
  primary,
  secundary,
  onClick,
  type,
  ...res
}: iButton) => {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      primary={primary}
      secundary={secundary}
      className={className}
      {...res}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
