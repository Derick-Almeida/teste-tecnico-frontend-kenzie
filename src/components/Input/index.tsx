import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { ThemeInput } from "./style";

interface IProps extends InputHTMLAttributes<HTMLInputTypeAttribute> {
  label?: string;
  msg?: string;
  event: (e: any) => void;
}

const Input = ({ label, placeholder, type, msg, min, className, event }: IProps) => {
  return (
    <ThemeInput>
      {label && <p>{label}</p>}
      <input
        type={type}
        min={min}
        className={className}
        onChange={(e) => event(e.target.value)}
        placeholder={placeholder}
      />
      {msg && <span>{msg}</span>}
    </ThemeInput>
  );
};

export default Input;
