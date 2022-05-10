import React from 'react';
import renderer from 'react-test-renderer';

import { COLORS } from '~/constants';

import Icon from './index';

jest.useFakeTimers();

describe('<Icon name="status-completed" />', () => {
  const name = 'status-completed';
  const testRenderer = renderer.create(<Icon name={name} />);
  const testInstance = testRenderer.root;
  const iconSetInstance = testInstance.findByProps({ allowFontScaling: false });
  it('has correct props', () => {
    expect(iconSetInstance.props.name).toBe(name);
    expect(iconSetInstance.props.style).toMatchObject({ fontFamily: 'IcoMoon' });
    expect(iconSetInstance.props.color).toBe(COLORS.WHITE); // Default Color white
    expect(iconSetInstance.props.size).toBe(19); // Default Size 19
  });
});

describe('<Icon name="search" color={COLORS.PRIMARY} size={15} />', () => {
  const name = 'search';
  const testRenderer = renderer.create(<Icon name={name} color={COLORS.PRIMARY} size={15} />);
  const testInstance = testRenderer.root;
  const iconSetInstance = testInstance.findByProps({ allowFontScaling: false });
  it('has correct props', () => {
    expect(iconSetInstance.props.name).toBe(name);
    expect(iconSetInstance.props.style).toMatchObject({ fontFamily: 'IcoMoon' });
    expect(iconSetInstance.props.color).toBe(COLORS.PRIMARY); // Default Color white
    expect(iconSetInstance.props.size).toBe(15); // Default Size 19
  });
});
