"use client";

import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const CloseButton = ({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const router = useRouter();

  return (
    <button
      type="button"
      className={twMerge("group", className)}
      onClick={router.back}
      {...props}
    >
      <div className="flex items-center justify-center w-[34px] h-[34px] rounded-full group-hover:bg-[rgba(239,243,244,0.1)] transition=[background] duration-200">
        <svg
          width={20}
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="fill-black dark:fill-white"
        >
          <g>
            <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
          </g>
        </svg>
      </div>
    </button>
  );
};
