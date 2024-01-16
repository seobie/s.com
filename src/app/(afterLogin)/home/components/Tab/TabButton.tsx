interface TabButtonProps {
  label: string
  isActive: boolean
  onClick: VoidFunction
}

export const TabButton = ({ isActive, label, onClick }: TabButtonProps) => {
  return (
    <button
      className="flex w-full flex-col items-center justify-center px-[16px] transition-all duration-200 hover:bg-[rgba(231,233,234,0.1)]"
      onClick={onClick}>
      <span
        className={`text-[15px] font-bold ${
          isActive ? 'text-[rgb(231,233,234)]' : 'text-[rgb(113,118,123)]'
        } py-[16px]`}>
        {label}
      </span>
      {isActive && (
        <span className="absolute bottom-0 h-[4px] min-w-[56px] rounded-full bg-[rgb(29,155,240)]" />
      )}
    </button>
  )
}
