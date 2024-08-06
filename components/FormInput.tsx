import { InputHTMLAttributes } from "react";

interface InputProps {
  name: string;
  errors?: string[];
}

export default function FormInput({
  name,
  errors = [],
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <input
        name={name}
        style={{ outline: "none", boxShadow: "none" }}
        className="bg-transparent w-full h-10 focus:outline-none focus:ring-0 placeholder:text-neutral-400"
        {...rest}
      />
      {errors &&
        errors.length > 0 &&
        errors.map((error, index) => (
          <span key={index} className="text-red-500 font-medium">
            {error}
          </span>
        ))}
    </div>
  );
}
