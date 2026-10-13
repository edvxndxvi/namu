import { render, screen } from '@testing-library/react'
import FavoriteButton from '../../../components/Favorite/FavoriteButton'
import userEvent from '@testing-library/user-event'

describe('FavoriteButton', () => {
  const user = userEvent.setup()

  it('mostra Favoritar quando não é favorito', () => {
    render(<FavoriteButton isFavorito={false} onToggleFavorite={() => {}} isPending={false} />)

    const button = screen.getByRole('button', { name: 'Adicionar aos Favoritos' })
    expect(button).toHaveAttribute('aria-pressed', 'false')
  })

  it('mostra Remover dos Favoritos quando é favorito', () => {
    render(<FavoriteButton isFavorito={true} onToggleFavorite={() => {}} isPending={false} />)

    const button = screen.getByRole('button', { name: 'Remover dos Favoritos' })
    expect(button).toHaveAttribute('aria-pressed', 'true')
  })

  it('chama onToggleFavorite ao clicar', async () => {
    const onToggleFavorite = jest.fn()
    render(
      <FavoriteButton isFavorito={false} onToggleFavorite={onToggleFavorite} isPending={false} />,
    )

    const button = screen.getByRole('button', { name: 'Adicionar aos Favoritos' })
    await user.click(button)
    expect(onToggleFavorite).toHaveBeenCalled()
  })

  it('fica desabilitado enquanto está pendente', () => {
    render(<FavoriteButton isFavorito={false} onToggleFavorite={() => {}} isPending={true} />)

    const button = screen.getByRole('button', { name: 'Adicionar aos Favoritos' })
    expect(button).toBeDisabled()
  })
})
