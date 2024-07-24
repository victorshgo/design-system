import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

/* Components */
import { CheckBox } from '.';

describe('Globals Components - CheckBox', () => {
  it('Should match snapshot', () => {
    const component = render(<CheckBox label='Render CheckBox' />);
    expect(component).toMatchSnapshot();
  });

  it('Should be able to see the checkbox content on screen', () => {
    const { getByText } = render(<CheckBox label='Render CheckBox' />);
    expect(getByText('Render CheckBox')).toBeInTheDocument();
  });
});
