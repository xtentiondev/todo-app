import React from 'react';

import { render } from '~/tests';
import ToDoScreen from '~/routes/ToDoScreen';
import EmptyScreen from '~/routes/EmptyScreen';

import Routes from './index';

jest.useFakeTimers();

describe('<Routes />', () => {
  const testRenderer = render(
    <Routes />
  );
  const testInstance = testRenderer.root;
  it('has To Do Screen rendered', () => {
    const todoScreenInstance = testInstance.findByType(ToDoScreen);
    expect(todoScreenInstance).toBeDefined();
  });
});

const tabs = ['my-day', 'calendar', 'lists'];

for (const tab of tabs) {
  describe(`<Routes initialRoutes="${tab}" />`, () => {
    const testRenderer = render(
      <Routes initialRoute={tab} />
    );
    const testInstance = testRenderer.root;
    it('has Empty Screen rendered', () => {
      const emptyScreenInstance = testInstance.findByType(EmptyScreen);
      expect(emptyScreenInstance).toBeDefined();
    });
  });
}
