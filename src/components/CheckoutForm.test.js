import React from "react"
import { render, screen } from "@testing-library/react"
import CheckoutForm from "./CheckoutForm"
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />)
  expect(screen.getByText(/Checkout Form/i)).toBeInTheDocument()
})

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />)
  userEvent.type(screen.getByLabelText(/First Name:/i), 'Kenny')
  userEvent.type(screen.getByLabelText(/Last Name:/i), 'Miesner')
  userEvent.type(screen.getByLabelText(/Address:/i), '123 Main St')
  userEvent.type(screen.getByLabelText(/City:/i), 'Des Moines')
  userEvent.type(screen.getByLabelText(/State:/i), 'IA')
  userEvent.type(screen.getByLabelText(/Zip:/i), '50309')
  userEvent.click(screen.getByRole('button'))
  expect(screen.getByTestId('successMessage')).toBeInTheDocument()
  expect(screen.getByText(/Kenny Miesner/i)).toBeInTheDocument()
  expect(screen.getByText(/123 Main St/i)).toBeInTheDocument()
  expect(screen.getByText(/Des Moines, IA 50309/i)).toBeInTheDocument()
})
