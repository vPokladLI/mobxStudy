import { observer } from 'mobx-react-lite';
import todos, { ITodo } from '../../store/todos';
interface Props {
  todo: ITodo;
}
function Todoitem({ todo }: Props) {
  return (
    <div className="ml-auto mr-auto flex justify-between items-center font-marckScript ">
      <label className="checkbox-container w-full">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => todos.toggleTodo(todo)}
        />
        <div className="checkmark"></div>
        <p className="font-marckScript ml-3 relative after:absolute">
          {todo.name}
        </p>
      </label>
      <button type="button" onClick={() => todos.removeTodo(todo.id)}>
        delete todo
      </button>
    </div>
  );
}
export default observer(Todoitem);
