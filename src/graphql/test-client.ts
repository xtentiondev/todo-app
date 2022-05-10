import { createMockClient } from 'mock-apollo-client';

import { TASKS } from '~/constants';
import { FETCH_TASK_LIST, TOGGLE_COMPLETION } from '~/graphql/queries/tasks';

const client = createMockClient();

client.setRequestHandler(
  FETCH_TASK_LIST,
  () => Promise.resolve({ data: { tasks: TASKS } })
);

client.setRequestHandler(
  TOGGLE_COMPLETION,
  ({ id }) => {
    const task = TASKS.find(t => t.id === id);
    return Promise.resolve({ data: { toggleCompletion: { ...task, completed: !task.completed } } });
  }
);

export default client;
