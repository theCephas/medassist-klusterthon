import React, { useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

type PasswordField = {
  name: "password";
  value: string;
};

type TextField = {
  name: string;
  value: string;
};

type Field = PasswordField | TextField;

interface IPasswordInputProps {
  label: string;
  field: UseFormRegister<Field>;
  error?: FieldError;
  type?: "text" | "password";
  placeholder: string;
  isPassword?: boolean;
}

const PasswordInput: React.FC<IPasswordInputProps> = ({
  label,
  field,
  error,
  placeholder,
  isPassword,
}) => {
  const [visible, setVisible] = useState(false);

  const handleVisibilty = () => {
    setVisible(!visible);
  };
  return (
    <div className="mb-4 relative">
      <label
        htmlFor={label}
        className="block font-medium font-lora mb-1 text-[14px] leading-[22px] text-font"
      >
        {label}
      </label>
      <input
        {...field}
        type={!visible ? "password" : "text"}
        placeholder={placeholder}
        className={`w-full p-2 rounded-md border border-opacity-40 px-4 ${
          error ? "border-[#a10]" : "border-font"
        } focus:border-primary focus:outline-none placeholder:text-sm placeholder:font-inter placeholder:leading-[28px] text-[#222D33] placeholder:font-normal placeholder:text-font`}
      />

      <span
        onClick={handleVisibilty}
        className="absolute  right-4 transform translate-y-2   cursor-pointer text-gray-500"
      >
        {visible ? (
          <AiOutlineEye size={23} />
        ) : (
          <AiOutlineEyeInvisible size={23} />
        )}
      </span>
      <p className="text-[#a10]">{error?.message}</p>
      {isPassword && (
        <p className="text-[#C2C2C2] text-[13px] leading-[22px]">
          Must be 8 characters long, Uppercase inclusive, with Special
          characters such as @ * / etc.
        </p>
      )}
    </div>
  );
};

export default PasswordInput;
