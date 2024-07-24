import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

/* Components */
import { Card } from '.';

describe('Globals Components - Button', () => {
  it('Should match snapshot', () => {
    const component = render(<Card>Render Card</Card>);
    expect(component).toMatchSnapshot();
  });

  it('Should be able to see the card name on screen', () => {
    const { getByText } = render(<Card>Render Card</Card>);
    expect(getByText('Render Card')).toBeInTheDocument();
  });
});
