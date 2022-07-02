import React from 'react';
import { Todo } from '../interfaces/todo';
import TodoItem from './TodoItem';

type Props = {
  todoList: Todo[];
  editTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
};

function TodoList({ todoList, editTodo, deleteTodo }: Props) {
  return (
    <ul className="flex flex-col gap-2">
      {todoList.length ? (
        todoList.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        ))
      ) : (
        <p>Your todo list is currently empty</p>
      )}
    </ul>
  );
}

export default TodoList;
