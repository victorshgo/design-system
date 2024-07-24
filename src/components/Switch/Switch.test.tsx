import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

/* Components */
import { Switch } from '.';

describe('Globals Components - Switch', () => {
  it('Should match snapshot', () => {
    const component = render(<Switch />);
    expect(component).toMatchSnapshot();
  });
});
