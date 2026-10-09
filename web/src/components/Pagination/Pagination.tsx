import PaginationButton from "./PaginationButton"

interface PaginationProps {
    currentPage: number
    totalPages: number
    setPage: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, setPage }: PaginationProps) {
    function handleAnterior() {
        if (currentPage === 1) return
        setPage(currentPage - 1)
    }

    function handleProxima() {
        if (currentPage === totalPages) return
        setPage(currentPage + 1)
    }

  return (
    <div className="flex justify-center items-center gap-4">
        <PaginationButton label="Anterior" onClick={handleAnterior} disabled={currentPage === 1} />
        <span>Página {currentPage} de {totalPages}</span>
        <PaginationButton label="Próxima" onClick={handleProxima} disabled={currentPage === totalPages} />
    </div>
  )
}
