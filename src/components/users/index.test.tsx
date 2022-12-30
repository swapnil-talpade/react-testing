import { render, screen } from '@testing-library/react'
import { rest } from 'msw'

import Users from '.'
import { server } from '../../mocks/server'

describe('User', () => {
  test('should render component', () => {
    render(<Users />)

    const textElement = screen.getByText('Users')
    expect(textElement).toBeInTheDocument()
  })

  test('should render list of users', async () => {
    render(<Users />)

    const users = await screen.findAllByRole('listitem')
    expect(users).toHaveLength(3)
  })

  test('should render error', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/users',
        (req, res, ctx) => {
          return res(ctx.status(500))
        }
      )
    )
    render(<Users />)

    const errorText = await screen.findByText('Error fetching users')
    expect(errorText).toBeInTheDocument()
  })
})
