import React from 'react';
import { render } from '@testing-library/react';

import Testreactlib from './app';

describe('Testreactlib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Testreactlib />);
    expect(baseElement).toBeTruthy();
  });
});