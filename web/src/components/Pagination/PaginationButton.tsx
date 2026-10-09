interface PaginationButtonProps {
  label: string
  onClick: () => void
  disabled: boolean
}

export default function PaginationButton({ label, onClick, disabled }: PaginationButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white hover:bg-stone-100 rounded-xl border border-stone-200 py-1.5 px-3 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
      disabled={disabled}
    >
      {label}
    </button>
  )
}
