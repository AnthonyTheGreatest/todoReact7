import React from 'react';
import Item from './Item';

const List = ({todos, clearTodos, toggleTodo, deleteTodo}) => {
  return (
    <>
        <h1>Todo List</h1>
        {todos.length === 0 && <p>No todos.</p>}
        {todos.length >= 2 && <button onClick={clearTodos}>Clear Todos</button>}
        <br /><br />
        {todos.map(todo => {
            return (
                <Item {...todo}
                      key={todo.id}
                      toggleTodo={toggleTodo}
                      deleteTodo={deleteTodo} />
            )
        })}
    </>
  );
};

export default List;
