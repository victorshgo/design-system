import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

/* Components */
import { Radio } from '.';

describe('Globals Components - Radio', () => {
  it('Should match snapshot', () => {
    const component = render(<Radio label='Render Radio' />);
    expect(component).toMatchSnapshot();
  });

  it('Should be able to see the radio content on screen', () => {
    const { getByText } = render(<Radio label='Render Radio' />);
    expect(getByText('Render Radio')).toBeInTheDocument();
  });
});
