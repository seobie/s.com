import { ReactNode } from "react";
import { CloseButton } from "./components";

type Props = { children: ReactNode; header?: ReactNode };

export const Modal = ({ children, header }: Props) => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.4)] dark:bg-[rgba(91,112,131,0.4)] flex items-center justify-center w-[100vw] h-full">
      <div className="flex flex-col w-[600px] h-[650px] rounded-2xl bg-white dark:bg-black">
        <div className="flex items-center max-w-[600px] px-4 h-[53px]">
          {header}
        </div>
        {children}
      </div>
    </div>
  );
};
