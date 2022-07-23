import React from 'react';
import createTask from '@wasp/actions/createTask';

export const TaskFormCreate = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const description = event.target.description.value;
      event.target.reset();
      await createTask({ description });
    } catch (err) {
      console.error(`Error: ${err.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="description" type="text" />
      <button type="submit">Create task</button>
    </form>
  );
};
