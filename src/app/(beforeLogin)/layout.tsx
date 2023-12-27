import { ReactNode } from "react";

type Props = { children: ReactNode; modal: ReactNode };

export default function BeforeLoginLayout({ children, modal }: Props) {
  return (
    <div className="flex h-[100dvh] bg-white dark:bg-black">
      {children}
      {modal}
    </div>
  );
}
