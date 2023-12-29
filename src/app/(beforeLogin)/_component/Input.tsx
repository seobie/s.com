import { HTMLAttributes, InputHTMLAttributes } from "react";

type Props = {
  attributes: InputHTMLAttributes<HTMLInputElement>;
  label: string;
};

export const Input = ({ label, attributes }: Props) => {
  return (
    <div className="flex flex-col h-14 relative my-3">
      <label
        htmlFor={attributes.id}
        className="w-full inline-block absolute top-0 border border-solid border-[rgb(207,217,222)] rounded text-xs h-14 px-2 pt-2 pb-0 text-[rgb(83,100,113)] focus-within:text-red-500 bg-transparent"
      >
        {label}
      </label>
      <input
        className="w-full border-none text-base mt-4 pt-3 px-2 outline-none bg-transparent"
        type="text"
        {...attributes}
      />
    </div>
  );
};
