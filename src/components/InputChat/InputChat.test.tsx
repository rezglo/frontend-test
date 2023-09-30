import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import InputChat from './InputChat'

describe('Modal', () => {
  test('should render', () => {
    render(<InputChat />)

    expect(screen.getByText('Enviar')).toBeDefined()
  })
})
