import { useEffect, useState } from 'react';

const Form = ({addTodo}) => {
    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (newTodo === '') return;
        addTodo(newTodo);
        setNewTodo('');
        // pre-select after reload:
        window.onsubmit = document.getElementById('newTodo').select();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="newTodo">New Todo</label>
            <br />
            <input  type='text'
                    id='newTodo'
                    autoFocus
                    value={newTodo}
                    onChange={e => setNewTodo(e.target.value)} />
            <br /><br />
            <button>Add</button>
        </form>
    );
};

export default Form;
