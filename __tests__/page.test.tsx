import { expect, test } from 'vitest';
import { getByRole, render, screen } from '@testing-library/react';
import Home from '../src/app/page';

test('スタートページに"Get started by editing"という文字が表示される', () => {
  render(<Home />)
  expect(screen.getByText(/get started by editing/i)).toBeDefined()
});