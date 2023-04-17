import React from "react";
import TextareaAutosize from "react-textarea-autosize";

interface Props {
  label: string;
  placeholder: string;
  value: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: "text" | "password" | "email";
  disabled?: boolean;
  required?: boolean;
  textArea?: boolean;
}

export default function TextInput({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  disabled = false,
  required = false,
  textArea = false,
}: Props) {
  return (
    <div className="flex flex-col w-full">
      <label className="font-primary mb-2 body-small text-white">{label}</label>

      {textArea ? (
        <TextareaAutosize
          className={`transition-all duration-200 bg-[#1B1B1B] bg-opacity-70 outline-none border-dark-grey rounded-lg px-5 py-4 text-white font-primary focus:text-white focus:border-red border-2`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
        />
      ) : (
        <input
          className={`transition-all duration-200 bg-[#1B1B1B] bg-opacity-70 outline-none border-dark-grey rounded-lg px-5 py-4 text-white font-primary focus:text-white focus:border-red border-2`}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
        />
      )}
    </div>
  );
}
