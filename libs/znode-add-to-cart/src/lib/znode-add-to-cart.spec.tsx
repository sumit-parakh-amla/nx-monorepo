import React from 'react';
import { render } from '@testing-library/react';

import ZnodeAddToCart from './znode-add-to-cart';

describe('ZnodeAddToCart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ZnodeAddToCart />);
    expect(baseElement).toBeTruthy();
  });
});
