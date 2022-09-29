import React, { ReactNode } from "react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  handleClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  children,
  className,
  handleClick,
  type = "button",
  ...restProps
}: Props) => {
  return (
    <button
      className={`__envited_gradient-primary p-4 text-base w-fit font-bold text-white rounded-[10px] ${className}`}
      onClick={handleClick}
      type={type}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
