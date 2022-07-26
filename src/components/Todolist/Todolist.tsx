import { observer } from 'mobx-react-lite';

import todos from '../../store/todos';
import Todoitem from '../TodoItem/TodoItem';

const Todolist = () => {
  return (
    <div className="max-h-[50vh] xl:max-h-[80vh] overflow-y-auto p-4 mb-6 shadow-2xl rounded-lg">
      {todos.total === 0 && <p>No todos added yet...</p>}
      <ul>
        {todos.todos
          .filter(todo =>
            todo.name.toLowerCase().includes(todos.filter.toLowerCase())
          )
          .map(todo => {
            return (
              <li key={todo.id} className="my-4">
                <Todoitem todo={todo} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default observer(Todolist);
