import React from 'react';

import { ListGroup } from 'reactstrap';
import Todo from './Todo';

function TodoList({ todos, setTodos }) {
    return (
        <ListGroup>
            {todos.length === 0 ? (
                <h2 className="text-center">No Tasks</h2>
            ) : (
                todos.map((todo, idx) => {
                    return (
                        <Todo
                            key={idx}
                            todo={todo}
                            setTodos={setTodos}
                            todos={todos}
                        />
                    );
                })
            )}
        </ListGroup>
    );
}

export default TodoList;
