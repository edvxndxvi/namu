import formatDuration from '../../utils/formatDuration'

describe('formatDuration', () => {
  it('converte segundos em minutos', () => {
    expect(formatDuration(650)).toBe('10:50')
  })
})
