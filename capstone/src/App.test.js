import { render, screen } from '@testing-library/react';
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import '@testing-library/jest-dom'
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('full app rendering/navigating', async () => {
  render(<App />, {wrapper: BrowserRouter})
  const user = userEvent.setup()

  expect(screen.getByText(/bluebus/i)).toBeInTheDocument()

})

test('landing on a bad page', () => {
  const badRoute = '/some/bad/route'
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>,
  )

  expect(screen.getByText(/no match/i)).toBeInTheDocument()
})

test('rendering a component that uses useLocation', () => {
  const route = '/some-route'

  render(
    <MemoryRouter initialEntries={[route]}>
      <LocationDisplay />
    </MemoryRouter>,
  )

  expect(screen.getByTestId('location-display')).toHaveTextContent(route)
})