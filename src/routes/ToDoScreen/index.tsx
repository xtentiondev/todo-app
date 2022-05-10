import React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { HStack } from 'native-base';
import { useQuery, useMutation } from '@apollo/client';

import Icon from '~/components/Icon';
import Layout from '~/components/Layout';
import Task, { TaskProps } from '~/components/Task';
import { TOGGLE_COMPLETION, FETCH_TASK_LIST } from '~/graphql/queries/tasks';

export type TasksCache = {
  tasks: TaskProps[];
};

const ToDoScreen = () => {
  const { loading: fetching, data } = useQuery(FETCH_TASK_LIST);
  const [toggleCompletion, { loading: completing }] = useMutation(TOGGLE_COMPLETION, {
    context: {
      serializationKey: 'MUTATION'
    },
    update: (cache, { }, { variables }) => {
      const existingTasks = cache.readQuery({ query: FETCH_TASK_LIST }) as TasksCache;
      const newTasks = existingTasks.tasks.map(t => {
        if (t.id === variables.id) {
          return {...t, completed: !t.completed};
        } else {
          return t;
        }
      });
      cache.writeQuery({
        query: FETCH_TASK_LIST,
        data: { tasks : newTasks }
      });
    }
  });
  const loading = fetching || completing;
  return (
    <Layout
      title='To Do'
      actions={
        <HStack space={3} alignItems='center'>
          <TouchableOpacity>
            <Icon name='search' size={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name='add-outlined' size={27} />
          </TouchableOpacity>
        </HStack>
      }
    >
      {loading && <ActivityIndicator size='large' />}
      {data?.tasks?.map((task: TaskProps) => (
        <Task
          key={task.id}
          {...task}
          onComplete={() => {
            toggleCompletion({ variables: { id: task.id } });
          }}
        />
      ))}
    </Layout>
  );
};

export default ToDoScreen;
