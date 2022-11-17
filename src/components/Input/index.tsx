import { HTMLInputTypeAttribute, InputHTMLAttributes, useContext, useState } from "react";
import { ContextReceipt } from "../../contexts/ReceiptsContext";
import Error from "./error";
import { ThemeInput } from "./style";

interface IProps extends InputHTMLAttributes<HTMLInputTypeAttribute> {
  label?: string;
  msg?: string;
  event: (e: any) => void;
  name?: string;
  error: string | boolean;
}

const Input = ({ label, placeholder, type, msg, min, className, name, error, event }: IProps) => {
  const { showError } = useContext(ContextReceipt);

  return (
    <ThemeInput>
      {label && <p>{label}</p>}
      <div>
        <input
          type={type}
          name={name}
          min={min}
          className={className}
          onChange={(e) => event(e.target.value)}
          placeholder={placeholder}
        />
        {showError && error && <Error msg={error as string} />}
      </div>
      {msg && <span>{msg}</span>}
    </ThemeInput>
  );
};

export default Input;
