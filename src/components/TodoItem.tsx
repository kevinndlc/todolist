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
    const newTodo = { ...todo, done: !todo.done };
    editTodo(newTodo);
  }

  function handleEdit() {
    const newTodo = { ...todo, editMode: !todo.editMode };
    editTodo(newTodo);
  }

  function handleDelete() {
    deleteTodo(todo._id);
  }

  function handleClickSubmit() {
    const newTodo = { ...todo, name, editMode: false };
    editTodo(newTodo);
  }

  function handleEnterSubmit(e: React.KeyboardEvent) {
    if (e.code === 'Enter') {
      const newTodo = { ...todo, name, editMode: false };
      editTodo(newTodo);
    }
  }

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
          } cursor-pointer border-b-2 border-transparent flex gap-2`}
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
