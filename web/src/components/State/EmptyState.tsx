export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-2">
      <h2 className="text-xl font-bold text-center">
        Nenhum conteúdo encontrado para os parâmetros de busca
      </h2>
      <p className="text-center">Tente outro título ou remova o filtro de categoria.</p>
    </div>
  )
}
