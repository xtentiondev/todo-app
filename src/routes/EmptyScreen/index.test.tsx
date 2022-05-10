import React from 'react';

import Layout from '~/components/Layout';
import { render } from '~/tests';

import EmptyScreen from './index';

jest.useFakeTimers();

describe('<EmptyScreen />', () => {
  const testRenderer = render(<EmptyScreen />);
  const testInstance = testRenderer.root;
  it('has correct layout title', () => {
    const layoutInstance = testInstance.findByType(Layout);
    expect(layoutInstance.props.title).toBe('Empty');
  });
});
