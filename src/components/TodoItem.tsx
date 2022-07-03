import React, { useState } from 'react';
import { Check, Edit3, X } from 'react-feather';
import { Todo } from '../interfaces/todo';

type Props = {
  todo: Todo;
  editTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
};

function TodoItem({ todo, editTodo, deleteTodo }: Props) {
  const [name, setName] = useState(todo.name);

  function handleChange(value: string) {
    setName(value);
  }

  function handleDone() {
    editTodo({ ...todo, done: !todo.done });
  }

  function handleEdit() {
    editTodo({ ...todo, editMode: !todo.editMode });
  }

  function handleDelete() {
    deleteTodo(todo._id);
  }

  function handleClickSubmit() {
    editTodo({ ...todo, name, editMode: false });
  }

  function handleEnterSubmit(e: React.KeyboardEvent) {
    if (e.code === 'Enter') {
      editTodo({ ...todo, name, editMode: false });
    }
  }

  console.count('Item ' + todo.name) ;

  return (
    <li className="flex gap-2">
      {todo.editMode ? (
        <input
          type="text"
          value={name}
          placeholder={todo.name}
          autoFocus
          onChange={(e) => handleChange((e.target as HTMLInputElement).value)}
          onKeyDown={handleEnterSubmit}
          className="flex-1 border-b-2 focus:border-blue-400 outline-none"
        />
      ) : (
        <h2
          onClick={handleDone}
          className={`${
            todo.done ? 'line-through' : ''
          } cursor-pointer border-b-2 border-transparent flex gap-2 select-none`}
        >
          {todo.name}
          {todo.done && <Check color="green" />}
        </h2>
      )}
      <div className="text-blue-400 ml-auto flex gap-2">
        {!todo.editMode ? (
          <>
            <button onClick={handleEdit}>
              <Edit3 />
              <span className="sr-only">Edit</span>
            </button>
            <button onClick={handleDelete}>
              <X />
              <span className="sr-only">Delete</span>
            </button>
          </>
        ) : (
          <button className="font-semibold" onClick={handleClickSubmit}>
            OK
          </button>
        )}
      </div>
    </li>
  );
}

export default TodoItem;
