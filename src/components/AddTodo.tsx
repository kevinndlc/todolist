import React from 'react';

type Props = {
  addTodo: (value: string) => void;
};

function AddTodo({ addTodo }: Props) {
  const [todo, setTodo] = React.useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (todo.length) {
      addTodo(todo);
      setTodo('');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 w-96 mb-4">
      <input
        type="text"
        className="flex-1 border-gray-200 border-2 px-1"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="btn">Add</button>
    </form>
  );
}

export default AddTodo;
