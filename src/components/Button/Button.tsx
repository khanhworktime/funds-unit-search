import { ButtonStyled } from "@/components/Button/Button.style";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps) {
  return <ButtonStyled {...props} />;
}
