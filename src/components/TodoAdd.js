import { useState } from 'react';
import '../styles/TodoAdd.css'
import { Row } from "react-bootstrap";

const TodoAdd = ({ onAddTask }) => {
    const [text, setText] = useState('');
    return (
        <Row className={'mx-0'}>
            <input
                type="text"
                className={'border-0 input-shadow bg-transparent px-5 py-3 text-light h4'}
                placeholder={'Co chcete přidat...'}
                value={text}
                onChange={((e) => setText(e.target.value))}
            />
        </Row>
    );
}

export default TodoAdd;