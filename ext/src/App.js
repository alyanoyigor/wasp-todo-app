import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import { useFetch } from './components/hooks/useFetch';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await fetch('http://localhost:3001/todo');

    if (!response.ok) {
      throw new Error('Request failed!');
    }

    const { data } = await response.json();

    setTasks(data);
  };

  const { isLoading, error, fetchData } = useFetch(fetchTasks);

  useEffect(() => {
    fetchData();
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </>
  );
}

export default App;
