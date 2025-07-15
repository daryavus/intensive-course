import { useParams } from 'react-router-dom';
import { mockTodos } from '../../shared/mocks/data';

export const UserTodosPage = () => {
  const { id } = useParams();
  const userTodos = mockTodos.filter(todo => todo.userId.toString() === id);

  return (
    <div>
      <h1>Задачи пользователя</h1>
      {userTodos.length === 0 ? (
        <p>У пользователя нет задач.</p>
      ) : (
        userTodos.map(todo => (
          <div key={todo.id}>
            <p>
              {todo.title} - {todo.completed ? 'Завершено' : 'Не завершено'}
            </p>
          </div>
        ))
      )}
    </div>
  );
};