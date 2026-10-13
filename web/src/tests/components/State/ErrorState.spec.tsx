import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ErrorState from '../../../components/State/ErrorState'
import { screen } from '@testing-library/react'

describe('ErrorState', () => {
  const user = userEvent.setup()

  it('mostra mensagem de erro', () => {
    render(<ErrorState message="Erro ao carregar" />)

    const errorMessage = screen.getByText('Erro ao carregar')
    expect(errorMessage).toBeInTheDocument()
  })

  it('chama o retry ao clicar em tentar de novo', async () => {
    const retry = jest.fn()
    render(<ErrorState message="Erro ao carregar" retry={retry} />)

    const button = screen.getByRole('button', { name: 'Tentar de novo' })
    await user.click(button)

    expect(retry).toHaveBeenCalled()
  })
})
