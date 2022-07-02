import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { Todo } from './interfaces/todo';

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  function addTodo(value: string) {
    const newTodo = {
      _id: crypto.randomUUID(),
      name: value,
      done: false,
      editMode: false,
    };
    setTodoList([...todoList, newTodo]);
  }

  function editTodo(todo: Todo) {
    const newTodoList = todoList.map((td) => {
      if (td._id === todo._id) {
        return todo;
      }
      return td;
    });

    setTodoList(newTodoList);
  }

  function deleteTodo(id: string) {
    setTodoList(todoList.filter((td) => td._id !== id));
  }

  return (
    <main className="card">
      <h1 className="text-4xl font-bold mb-8 underline decoration-blue-400">
        Todo List
      </h1>
      <AddTodo addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
    </main>
  );
}

export default App;
