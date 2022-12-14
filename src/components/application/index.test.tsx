import { render, screen } from '@testing-library/react'
import { Application } from '.'

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />)

    const pageHeading = screen.getByRole('heading', {
      level: 1,
    })
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole('heading', {
      level: 2,
    })
    expect(sectionHeading).toBeInTheDocument()

    const paragraphElement = screen.getByText('All field are mandatory')
    expect(paragraphElement).toBeInTheDocument()

    const paragraphElementRegex = screen.getByText(/field/)
    expect(paragraphElementRegex).toBeInTheDocument()

    const paragraphElementSubstring = screen.getByText('field', {
      exact: false,
    })
    expect(paragraphElementSubstring).toBeInTheDocument()

    const paragraphCustomFunction = screen.getByText((content) =>
      content.startsWith('All')
    )
    expect(paragraphCustomFunction).toBeInTheDocument()

    const imageElement = screen.getByAltText('dog images')
    expect(imageElement).toBeInTheDocument()

    const customElement = screen.getByTestId('custom-element')
    expect(customElement).toBeInTheDocument()

    const closeElement = screen.getByTitle('close')
    expect(closeElement).toBeInTheDocument()

    const nameElement = screen.getByRole('textbox', {
      name: 'Name',
    })
    expect(nameElement).toBeInTheDocument()

    const nameElement2 = screen.getByLabelText('Name')
    expect(nameElement2).toBeInTheDocument()

    const nameElement3 = screen.getByPlaceholderText('FullName')
    expect(nameElement3).toBeInTheDocument()

    const nameElement4 = screen.getByDisplayValue('Swapnil')
    expect(nameElement4).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    })
    expect(bioElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()

    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()

    const termsElement2 = screen.getByLabelText(
      'I agree to the terms and conditions'
    )
    expect(termsElement2).toBeInTheDocument()

    const submitElement = screen.getByRole('button')
    expect(submitElement).toBeInTheDocument()

    expect(submitElement).toBeDisabled()
  })
})
