import React from 'react';
import { render, screen } from '@testing-library/react';
import LeadForm from '../src/components/LeadForm';

test('renders form fields', () => {
  render(<LeadForm />);
  expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
});