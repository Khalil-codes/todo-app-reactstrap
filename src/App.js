import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import './App.css';

import InputForm from './components/InputForm';
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filterTodos, setFilterTodos] = useState([]);

    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilterTodos(todos.filter((item) => item.complete === true));
                break;
            case 'incomplete':
                setFilterTodos(todos.filter((item) => item.complete === false));
                break;
            default:
                setFilterTodos(todos);
                break;
        }
    };

    useEffect(filterHandler, [status, todos]);

    return (
        <Container>
            <div className="content">
                <h2 className="mb-4">What do You Want to do Today?</h2>
                <InputForm
                    todos={todos}
                    setTodos={setTodos}
                    setStatus={setStatus}
                />
                <hr />
                <TodoList todos={filterTodos} setTodos={setTodos} />
            </div>
        </Container>
    );
}

export default App;
