import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Layout from '../routes/Layout';
import { BrowserRouter as Router } from 'react-router-dom';

it('should check layout has home link', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Layout />
    </Router>,
    div,
  );

  expect(div.innerHTML.indexOf('<a href="/">Home</a>')).toBeGreaterThan(0);
});

it('should check layout has home link - tested different way for learning', () => {
  render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>,
  );

  const link = screen.getByText('Home');
  expect(link).toBeInTheDocument();
});
