import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, Box, HStack } from 'native-base';

import { render } from '~/tests';
import { COLORS, TASKS } from '~/constants';
import Icon from '~/components/Icon';
import Tag from '~/components/Tag';

import Task from './index';

jest.useFakeTimers();

describe('<Task {...TASKS[0]}>', () => {
  /* TASKS[0] = {
    id: 1,
    title: 'Call carpenter to fix kitchen pipe',
    highPriority: true
  } */
  const testRenderer = render(
    <Task {...TASKS[0]} />
  );
  const testInstance = testRenderer.root;
  it('has the highlight box', () => {
    const boxInstance = testInstance.findAllByType(Box).find(({ props: { style } }) => style?.transform);
    expect(boxInstance.props.style.backgroundColor).toBe(COLORS.SECONDARY);
  });
  it('has the correct title', () => {
    const textInstance = testInstance.findAllByType(Text)[0];
    expect(textInstance.props.textDecorationLine).toBe('none');
    expect(textInstance.props.children).toBe(TASKS[0].title);
  });
  it('does not render HStack', () => {
    const tagsWrapperInstances = testInstance.findAllByType(HStack);
    expect(tagsWrapperInstances.length).toBe(0);
  });
  it('has the correct Icon for incomplete', () => {
    const iconInstance = testInstance.findByType(Icon);
    expect(iconInstance.props.name).toBe('status-select');
    expect(iconInstance.props.color).toBe(COLORS.GRAY3);
    expect(iconInstance.props.size).toBe(22);
  });
});

describe('<Task {...TASKS[1]}>', () => {
  /* TASKS[1] = {
    id: 2,
    title: 'Pick Melanie from football game',
    tags: ['home', 'celebration', 'chores']
  } */
  const testRenderer = render(
    <Task {...TASKS[1]} />
  );
  const testInstance = testRenderer.root;
  it('does not have the highlight box', () => {
    const boxInstance = testInstance.findAllByType(Box).find(({ props: { style } }) => style?.transform);
    expect(boxInstance).toBeFalsy();
  });
  it('does render HStack correctly', () => {
    const tagsWrapperInstance = testInstance.findByType(HStack);
    const tagsInstance = tagsWrapperInstance.findAllByType(Tag);
    for (let i = 0; i < TASKS[1].tags.length; i ++) {
      expect(tagsInstance[i].props.children).toBe(TASKS[1].tags[i]);
    }
  });
});

describe('<Task {...TASKS[3]}>', () => {
  /* TASKS[3] = {
    id: 4,
    title: 'Pick Melanie from football game',
    highPriority: true,
    tags: ['home', 'celebration', 'chores'],
    completed: true
  } */
  const onComplete = jest.fn();
  const testRenderer = render(
    <Task {...TASKS[3]} onComplete={onComplete} />
  );
  const testInstance = testRenderer.root;

  it('has the correct Icon and Text for complete', () => {
    const iconInstance = testInstance.findByType(Icon);
    expect(iconInstance.props.name).toBe('status-completed');
    expect(iconInstance.props.color).toBe(COLORS.SECONDARY);

    const textInstance = testInstance.findAllByType(Text)[0];
    expect(textInstance.props.textDecorationLine).toBe('line-through');
  });

  it('onComplete called successfully', () => {
    const touchableOpacityInstance = testInstance.findByType(TouchableOpacity);
    touchableOpacityInstance.props.onPress();
    expect(onComplete).toBeCalled();
  });
});
