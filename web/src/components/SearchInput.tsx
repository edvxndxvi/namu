interface SearchInputProps {
label: string
  value: string
  onChange: (value: string) => void
}

export default function SearchInput({ label, value, onChange }: SearchInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="search-input" className="text-sm font-medium text-stone-700">{label}</label>
      <input
        id="search-input"
        type="text"
        placeholder="Buscar..."
        className="border border-stone-200 rounded-full py-2 px-4 w-full"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
