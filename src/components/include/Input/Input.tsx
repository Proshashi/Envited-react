import React from "react";

type Props = {
  value: string;
  name: string;
  placeholder: string;
  handleInputChange: (value: string) => void;
};

const Input = ({ handleInputChange, value, placeholder, name }: Props) => {
  return (
    <div className="w-full p-4">
      <label
        className="text-sm text-bold text-primary mb-2 inline-block"
        htmlFor={name}
      >
        {placeholder}
      </label>
      <input
        id={name}
        className="rounded-md border bg-secondary_purple_3 active:border-secondary_purple_1 w-full py-4 px-2 text-secondary"
        onChange={(e) => handleInputChange(e.target.value)}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
