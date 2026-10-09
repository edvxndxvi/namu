interface EmptyStateProps {
  favorite?: boolean
}

export default function EmptyState({ favorite }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-2">
      <h2 className="text-xl font-bold text-center">
        {favorite
          ? 'Nenhum favorito encontrado.'
          : 'Nenhum conteúdo encontrado para os parâmetros de busca'}
      </h2>
      <p className="text-center">
        {favorite
          ? 'Adicione alguns favoritos para vê-los aqui.'
          : 'Tente outro título ou remova o filtro de categoria.'}
      </p>
    </div>
  )
}
