import {useState, useEffect} from 'react'
import Form from './Form'
import List from './List'

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos(prev => {
      return [
        ...prev,
        {
          id: crypto.randomUUID(),
          text: text,
          checked: false
        }
      ];
    });
  };

  const listHelpers = {
    clearTodos() {
      setTodos([]);
    },
    toggleTodo(id, checked) {
      setTodos(prev => {
        return prev.map(todo => {
          return todo.id === id ? {...todo, checked} : todo;
        });
      });
    },
    deleteTodo(id) {
      setTodos(prev => {
        return prev.filter(todo => todo.id !== id);
      });
    }
  };

  return (
    <>
      <Form addTodo={addTodo}/>
      <List todos={todos}
            {...listHelpers} />
    </>
  )
}

export default App