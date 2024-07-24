import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

/* Components */
import { Alert } from '.';

describe('Globals Components - Alert', () => {
  it('Should match snapshot', () => {
    const component = render(<Alert message='Render Alert' />);
    expect(component).toMatchSnapshot();
  });

  it('Should be able to see the Alert content on screen', () => {
    const { getByText } = render(<Alert message='Render Alert' />);
    expect(getByText('Render Alert')).toBeInTheDocument();
  });
});
