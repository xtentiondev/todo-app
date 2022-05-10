import React from 'react';
import { ActivityIndicator } from 'react-native';
import { act, ReactTestInstance } from 'react-test-renderer';

import Icon from '~/components/Icon';
import Task from '~/components/Task';
import { render } from '~/tests';

import ToDoScreen from './index';

jest.useFakeTimers();

// Loading
describe('<ToDoScreen />', () => {
  const testRenderer = render(
    <ToDoScreen />
  );
  const testInstance = testRenderer.root;
  it('has correct action icons', () => {
    const iconsInstance = testInstance.findAllByType(Icon);
    expect(iconsInstance[0].props.name).toBe('search');
    expect(iconsInstance[1].props.name).toBe('add-outlined');
  });

  it('properly show activity indicator and tasks based on state', () => {
    let activityIndicatorInstances = testInstance.findAllByType(ActivityIndicator);
    expect(activityIndicatorInstances.length).toBe(1); // It is displayed
    let taskInstances = testInstance.findAllByType(Task);
    expect(taskInstances.length).toBe(0); // No Tasks

    // Now loaded
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    activityIndicatorInstances = testInstance.findAllByType(ActivityIndicator);
    expect(activityIndicatorInstances.length).toBe(0); // It is not displayed
    taskInstances = testInstance.findAllByType(Task);
    expect(taskInstances.length).toBe(4); // 4 Tasks
  });

  it('task 2 is not complete before you click toggle', () => {
    let taskInstances = testInstance.findAllByType(Task);
    expect(taskInstances[1].props.completed).toBeFalsy();

    act(() => {
      // Complete clicked
      taskInstances[1].props.onComplete();
      jest.advanceTimersByTime(500);
    });

    taskInstances = testInstance.findAllByType(Task);
    expect(taskInstances[1].props.completed).toBe(true);
  });
});
