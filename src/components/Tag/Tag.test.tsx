import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

/* Components */
import { Tag } from './styles';

describe('Globals Components - Tag', () => {
  it('Should match snapshot', () => {
    const component = render(<Tag>Render Tag</Tag>);
    expect(component).toMatchSnapshot();
  });

  it('Should be able to see the tag content on screen', () => {
    const { getByText } = render(<Tag>Render Tag</Tag>);
    expect(getByText('Render Tag')).toBeInTheDocument();
  });
});
