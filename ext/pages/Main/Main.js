import React from 'react';

import getTasks from '@wasp/queries/getTasks';
import { useQuery } from '@wasp/queries';

import { TaskList } from './components/TaskList';
import { TaskFormCreate } from './components/TaskFormCreate';

export const Main = () => {
  const { data: tasks, isFetching: isLoading, error } = useQuery(getTasks);

  return (
    <div>
      <TaskFormCreate />
      {isLoading && !error && <h1>Fetching...</h1>}
      {tasks && !isLoading && <TaskList tasks={tasks} />}
      {error && !isLoading && <h1>Error</h1>}
    </div>
  );
};
