import type { InputHTMLAttributes } from 'react'

type Props = {
  attributes: InputHTMLAttributes<HTMLInputElement>
  label: string
}

export const Input = ({ attributes, label }: Props) => {
  return (
    <div className="relative my-3 flex h-14 flex-col">
      <label
        htmlFor={attributes.id}
        className="absolute top-0 inline-block h-14 w-full rounded border border-solid border-[rgb(207,217,222)] bg-transparent px-2 pb-0 pt-2 text-xs text-[rgb(83,100,113)] focus-within:text-red-500">
        {label}
      </label>
      <input
        className="mt-4 w-full border-none bg-transparent px-2 pt-3 text-base outline-none"
        type="text"
        {...attributes}
      />
    </div>
  )
}
