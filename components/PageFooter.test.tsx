import { render, screen } from '@testing-library/react';
import PageFooter from './PageFooter';

describe('PageFooter', () => {
  it('should render exchange rates update notice', () => {
    render(<PageFooter />);

    expect(screen.getByText('Exchange rates are updated hourly')).toBeInTheDocument();
  });

  it('should not render last updated when lastUpdated is not provided', () => {
    render(<PageFooter />);

    expect(screen.queryByText(/Last updated:/)).not.toBeInTheDocument();
  });

  it('should render last updated timestamp when lastUpdated is provided', () => {
    const timestamp = new Date('2024-01-15T10:30:00').getTime();
    render(<PageFooter lastUpdated={timestamp} />);

    expect(screen.getByText(/Last updated:/)).toBeInTheDocument();
  });

  it('should render copyright notice with current year', () => {
    render(<PageFooter />);

    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(`© ${currentYear} Godel Technologies. All rights reserved.`)
    ).toBeInTheDocument();
  });

  it('should render copyright notice with Godel Technologies name', () => {
    render(<PageFooter />);

    expect(screen.getByText(/Godel Technologies/)).toBeInTheDocument();
  });
});
