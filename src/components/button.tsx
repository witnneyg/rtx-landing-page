import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  size: "small" | "medium";
}

export function Button({ children, size }: ButtonProps) {
  const baseStyle =
    "p-[6px]  text-sm text-black font-semibold bg-green-400 hover:bg-red-400";

  const sizesStyles = {
    medium: "w-60",
    small: "w-20",
  };

  return (
    <button className={`${baseStyle}  ${sizesStyles[size]}`}>{children}</button>
  );
}

//w-60 padrao
