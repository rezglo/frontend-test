import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ModalDefault from './Modal'

describe('Modal', () => {
  test('should render', () => {
    render(
    <ModalDefault label='test'>
        <h1>Test Default</h1>
    </ModalDefault>)

    expect(screen.getByText('test')).toBeDefined()
  })
})
