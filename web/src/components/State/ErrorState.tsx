interface ErrorStateProps {
  message?: string
  retry?: () => void
}

export default function ErrorState({ message, retry }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-2">
      <h2 className="text-xl font-bold text-center">Algo deu errado :/</h2>
      <p className="text-center">{message}</p>
      {retry && (
        <button
          onClick={retry}
          className="py-2 px-4 bg-black rounded-lg text-white cursor-pointer hover:bg-gray-800 transition-colors"
        >
          Tentar de novo
        </button>
      )}
    </div>
  )
}
