import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  size: "small" | "medium";
}

export function Button({ children, size }: ButtonProps) {
  const baseStyle =
    "p-[6px]  text-sm text-black font-semibold bg-green-400  lg:p-3 lg:text-lg lg:font-bold  hover:bg-nvidia-green-hover ";

  const sizesStyles = {
    medium: "w-60 lg:w-80",
    small: "w-20 lg:w-28",
  };

  return (
    <button className={`${baseStyle}    ${sizesStyles[size]} bg-nvidia-green`}>
      {children}
    </button>
  );
}
