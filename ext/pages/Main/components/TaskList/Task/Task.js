import React from 'react';
import updateTask from '@wasp/actions/updateTask';

export const Task = (props) => {
  const { task } = props;

  const handleIsDoneChange = async (event) => {
    try {
      await updateTask({
        taskId: props.task.id,
        data: { isDone: event.target.checked },
      });
    } catch (error) {
      window.alert('Error while updating task: ' + error.message);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        id={task.id}
        checked={task.isDone}
        onChange={handleIsDoneChange}
        readOnly
      />
      {task.description}
    </div>
  );
};
