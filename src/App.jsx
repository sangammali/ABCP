import AppNavigation from 'AppNavigation';
import React from 'react';
import { todoApiAction } from 'stores/apiSlices/todoSlice';
import './index.css';

const App = () => {
  const [perPage, setPerPage] = React.useState(10);
  const [todoContent, setTodoContent] = React.useState('');

  const {
    data = [],
    isFetching,
    refetch,
  } = todoApiAction.getTodos({ limit: perPage });
  const [createTodo] = todoApiAction.createTodo();

  const handleCreateTodoClick = () => {
    createTodo({ userId: 1, todo: todoContent });
    setTodoContent('');
    refetch();
  };

  return (
    <>
      {/*<h1>Welcome</h1>
      <div style={{ display: 'flex' }}>
        <input
          onChange={(e) => setTodoContent(e.target.value)}
          value={todoContent}
        />
        <button onClick={handleCreateTodoClick}>Create Todo</button>
      </div>

      <select
        value={perPage}
        onChange={(e) => setPerPage(Number(e.target.value))}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
      </select>

      {isFetching ? (
        <div>Fetching...</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>UserID</th>
              <th>TODO</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.userId}</td>
                <td>{todo.todo}</td>
                <td>{todo.completed ? 'COMPLETED' : 'TODO'}</td>
              </tr>
            ))}
          </tbody>
        </table>
            )}*/}
              <AppNavigation />
    </>
  );
};

export default App;
