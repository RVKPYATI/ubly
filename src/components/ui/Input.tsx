import { FC } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  classLabel?: string;
}

export const Input: FC<InputProps> = ({
  className = "",
  label,
  id,
  classLabel = "",
  ...props
}) => {
  return (
    <label htmlFor={id} className={`text-[14px] pl-1 ${classLabel}`}>
      {label && <span>{label}</span>}{" "}
      <input
        id={id}
        type="text"
        className={`w-full p-3 rounded-[6px] bg-brown/10 ${className}`}
        {...props}
      />
    </label>
  );
};
