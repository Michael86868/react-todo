import { useState } from 'react';
import '../styles/TodoAdd.css'
import { Row } from "react-bootstrap";
import { useTasksDispatch } from "./TasksContext";

const TodoAdd = () => {
    const [text, setText] = useState('');
    const dispatch = useTasksDispatch()
    return (
        <Row className={'mx-0'}>
            <input
                type="text"
                className={'border-0 input-shadow bg-transparent px-5 py-3 text-light h4'}
                placeholder={'Co chcete přidat...'}
                value={text}
                onChange={((e) => setText(e.target.value))}
                onKeyDown={(e) => (e.key === 'Enter') && (text.length > 0) && (dispatch({ type: 'added', text: text }) || setText('')) }
            />
        </Row>
    );
}

export default TodoAdd;