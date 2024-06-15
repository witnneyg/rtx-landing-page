import { ReactNode } from "react";

export function Button({ children }: { children: ReactNode }) {
  return (
    <button className="p-2 text-sm w-20 text-black font-semibold bg-green-400 hover:bg-red-400">
      {children}
    </button>
  );
}

//w-60 padrao
