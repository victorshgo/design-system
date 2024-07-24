import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

/* Components */
import { Typhography } from './styles';

describe('Globals Components - Typhography', () => {
  it('Should match snapshot', () => {
    const component = render(<Typhography>Render Typhography</Typhography>);
    expect(component).toMatchSnapshot();
  });

  it('Should be able to see the typography content on screen', () => {
    const { getByText } = render(<Typhography>Render Typhography</Typhography>);
    expect(getByText('Render Typhography')).toBeInTheDocument();
  });
});
