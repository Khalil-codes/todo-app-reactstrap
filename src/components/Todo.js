import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';
function Todo({ todo, todos, setTodos }) {
    const completeTodoHandler = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, complete: !item.complete };
                }
                return item;
            })
        );
    };
    const deleteTodoHandler = () => {
        setTodos(todos.filter((item) => item.id !== todo.id));
    };
    return (
        <ListGroupItem
            className={`d-flex justify-content-between ${
                todo.complete ? 'completed' : ''
            }`}>
            <div onClick={completeTodoHandler}>{todo.text}</div>
            <Button className="btn-trash" onClick={deleteTodoHandler}>
                <i className="fas fa-trash"></i>
            </Button>
        </ListGroupItem>
    );
}

export default Todo;
