import React from 'react';
import { ScrollView, Text } from 'native-base';

import Icon from '~/components/Icon';
import { render } from '~/tests';

import Layout from './index';

jest.useFakeTimers();

describe('<Layout />', () => {
  const iconName = 'status-completed';
  const title = 'My Layout';
  const childText = 'Test Child';
  const testRenderer = render(
    <Layout
      title={title}
      actions={<Icon name={iconName} />}
    >
      <Text>{childText}</Text>
    </Layout>
  );
  const testInstance = testRenderer.root;
  it('has the correct title', () => {
    const titleInstance = testInstance.findAllByType(Text).find(({ props: { children } }) => children === title);
    expect(titleInstance).toBeDefined();
  });
  it('has the correct actions', () => {
    const iconInstance = testInstance.findByType(Icon);
    const parentInstance = iconInstance.parent;
    expect(parentInstance.type).toBe('View');
    expect(iconInstance.props.name).toBe(iconName);
  });
  it('has the correct content', () => {
    const scrollInstance = testInstance.findByType(ScrollView);
    const childTextInstance = scrollInstance.findByType(Text);
    expect(childTextInstance.props.children).toBe(childText);
  });
});
