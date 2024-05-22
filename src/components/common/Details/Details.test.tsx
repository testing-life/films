import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Details from './Details';

describe('Details Component', () => {
  it('renders the details element', () => {
    render(<Details title='Test Title' content='Test Content' />);
    const detailsElement = screen.getByRole('group');
    expect(detailsElement).toBeInTheDocument();
  });

  it('renders the summary element with the provided title', () => {
    render(<Details title='Test Title' content='Test Content' />);
    const summaryElement = screen.getByText('Test Title');
    expect(summaryElement).toBeInTheDocument();
  });

  it('renders the p element with the provided content', () => {
    render(<Details title='Test Title' content='Test Content' />);
    const contentElement = screen.getByText('Test Content');
    expect(contentElement).toBeInTheDocument();
    expect(contentElement.tagName).toBe('P');
  });

  it('reveals content when summary is clicked', () => {
    render(<Details title='Test Title' content='Test Content' />);
    const summaryElement = screen.getByText('Test Title');
    const contentElement = screen.getByText('Test Content');

    expect(contentElement).not.toBeVisible();
    fireEvent.click(summaryElement);
    expect(contentElement).toBeVisible();
  });
});
