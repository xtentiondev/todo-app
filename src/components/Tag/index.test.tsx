import React from 'react';
import { Text, Badge } from 'native-base';
import { startCase } from 'lodash';

import { render } from '~/tests';
import { COLORS } from '~/constants';

import Tag, { TagType } from './index';

jest.useFakeTimers();

describe('<Tag>home</Tag>', () => {
  const tag: TagType = 'home';
  const testRenderer = render(
    <Tag>{tag}</Tag>
  );
  const testInstance = testRenderer.root;
  it('has the correct color and backgroundColor', () => {
    const badgeInstance = testInstance.findByType(Badge);
    expect(badgeInstance.props.style.backgroundColor).toBe(COLORS.TAG1);
    expect(badgeInstance.props.style.color).toBe(COLORS.BLACK);
  });
  it('has the correct badge text', () => {
    const textInstance = testInstance.findByType(Text);
    expect(textInstance.props.children).toBe(startCase(tag));
  });
});

describe('<Tag>celebration</Tag>', () => {
  const tag: TagType = 'celebration';
  const testRenderer = render(
    <Tag>{tag}</Tag>
  );
  const testInstance = testRenderer.root;
  it('has the correct color and backgroundColor', () => {
    const badgeInstance = testInstance.findByType(Badge);
    expect(badgeInstance.props.style.backgroundColor).toBe(COLORS.TAG2);
    expect(badgeInstance.props.style.color).toBe(COLORS.BLACK);
  });
});

describe('<Tag>chores</Tag>', () => {
  const tag: TagType = 'chores';
  const testRenderer = render(
    <Tag>{tag}</Tag>
  );
  const testInstance = testRenderer.root;
  it('has the correct color and backgroundColor', () => {
    const badgeInstance = testInstance.findByType(Badge);
    expect(badgeInstance.props.style.backgroundColor).toBe(COLORS.TAG3);
    expect(badgeInstance.props.style.color).toBe(COLORS.BLACK);
  });
});
