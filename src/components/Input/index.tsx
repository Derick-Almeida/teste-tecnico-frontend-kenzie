import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { ThemeInput } from "./style";

interface IProps extends InputHTMLAttributes<HTMLInputTypeAttribute> {
  label?: string;
  msg?: string;
}

const Input = ({ label, placeholder, type, msg, min }: IProps) => {
  return (
    <ThemeInput>
      {label && <p>{label}</p>}
      <input type={type} min={min} placeholder={placeholder} />
      {msg && <span>{msg}</span>}
    </ThemeInput>
  );
};

export default Input;
