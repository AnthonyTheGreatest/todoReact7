import React from 'react';

const Item = ({id, text, checked, toggleTodo, deleteTodo}) => {
  return (
    <li>
        <input  type='checkbox'
                id='checkbox'
                checked={checked}
                onClick={e => toggleTodo(id, e.target.checked)} />
        <label htmlFor="checkbox">{text}</label>
        <button onClick={() => deleteTodo(id)} >Delete</button>
    </li>
  );
};

export default Item;
