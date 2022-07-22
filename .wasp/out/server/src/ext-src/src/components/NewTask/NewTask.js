import { useFetch } from '../hooks/useFetch';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const enterTaskHandler = async (taskText) => {
    const response = await fetch('http://localhost:3001/todo', {
      method: 'POST',
      body: JSON.stringify({ name: taskText }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Request failed!');
    }

    const { data } = await response.json();

    props.onAddTask(data);
  };

  const { isLoading, error, fetchData } = useFetch(enterTaskHandler);

  return (
    <Section>
      <TaskForm onEnterTask={fetchData} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
