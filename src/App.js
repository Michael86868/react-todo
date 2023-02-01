import './App.css';
import { Col, Container, Row } from "react-bootstrap";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import { useState } from "react";
import TodoSettings from "./components/TodoSettings";

const initialTasks = [
    {
        id: 0,
        text: 'Task 1',
        done: true,
    },
    {
        id: 1,
        text: 'Task 2',
        done: false,
    },
    {
        id: 2,
        text: 'Task 3',
        done: false,
    },
]
let lastTaskIndex = 2;

function App() {
    const [ tasks, setTasks ] = useState(initialTasks);

    const handleAddTask = (text) => setTasks([ ...tasks, { id: ++lastTaskIndex, text: text, done: false } ])

    const handleChangeTask = (task) => setTasks(tasks.map((t) => (t.id === task.id) ? task : t))

    const handleDeleteTask = (id) => setTasks(tasks.filter((task) => (task.id !== id)))

    return (
        <div className="todo-main">
            <Container className={'todo-container'}>
                <Row className={'mb-5 d-flex justify-content-between mx-2'}>
                    <Col>
                        <h1 className={'fst-italic'}
                            style={{ letterSpacing: '7px', color: '#075B90' }}>{'TODO APP'}</h1>
                    </Col>
                    <Col className={'d-flex justify-content-end align-items-center'}>
                        <TodoSettings />
                    </Col>
                </Row>
                <TodoAdd onAddTask={handleAddTask} />
                <TodoList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
            </Container>
        </div>
    );
}

export default App;
