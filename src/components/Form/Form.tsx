import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import todos from '../../store/todos';
const Form = observer(() => {
  const [formvalue, setFormvalue] = useState('');

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    todos.addFilter(enteredName);
    setFormvalue(enteredName);
  };

  const handlerSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!formvalue.trim()) {
      alert('Input is empty');
      return;
    }

    todos.addTodo({ name: formvalue, id: '', completed: false });
    setFormvalue('');
  };

  return (
    <>
      <form
        onSubmit={handlerSubmit}
        className="w-full flex justify-between mb-11 mr-4"
      >
        <label className="w-full mr-10">
          <input
            type="text"
            value={formvalue}
            onChange={inputHandler}
            className=" w-full border-b-2 border-gray-400  px-4 bg-[#e8e8e8] shadow-set font-bold  h-11 transition-opacity duration-500 focus:border-opacity-0  outline-none"
            placeholder="Type here todo or search by name"
          />
        </label>
        <button type="submit">Add todo</button>
      </form>
    </>
  );
});

export default Form;
