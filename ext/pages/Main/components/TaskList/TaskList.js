import React from 'react';
import { Task } from './Task';

export const TaskList = (props) => {
  const { tasks } = props;

  return (
    <>
      {tasks.length === 0 && <h1>No tasks</h1>}
      {tasks.length > 0 &&
        tasks.map((task) => <Task task={task} key={task.id} />)}
    </>
  );
};

TaskList.defaultProps = {
  tasks: [],
};
