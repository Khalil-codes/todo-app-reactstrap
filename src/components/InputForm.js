import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, InputGroup } from 'reactstrap';

function InputForm({ todos, setTodos, setStatus }) {
    const [inputText, setInputText] = useState('');

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const addTodoHandler = (e) => {
        e.preventDefault();
        if (inputText.length === 0) return;
        setTodos([
            ...todos,
            {
                id: Math.floor(Math.random() * 100000),
                text: inputText,
                complete: false,
            },
        ]);
        setInputText('');
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };
    return (
        <Form onSubmit={addTodoHandler}>
            <FormGroup>
                <InputGroup>
                    <Input
                        name="todo"
                        placeholder="Enter your Task"
                        value={inputText}
                        onChange={inputTextHandler}
                        required
                    />
                    <Button color="secondary" onClick={addTodoHandler}>
                        <i className="fas fa-plus"></i>
                    </Button>
                </InputGroup>
                <Input
                    onChange={statusHandler}
                    type="select"
                    name="select"
                    className="mt-2">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </Input>
            </FormGroup>
        </Form>
    );
}

export default InputForm;
