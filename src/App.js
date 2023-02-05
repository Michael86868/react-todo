import './App.css';
import { Container } from "react-bootstrap";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import { useReducer } from "react";
import tasksReducer from './components/TasksReducer'

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
    const [ tasks, dispatch ] = useReducer(tasksReducer, initialTasks);
    const handleAddTask = (text) => dispatch({ type: 'added', id: ++lastTaskIndex, text: text })

    const handleChangeTask = (task) => dispatch({ type: 'changed', task: task })

    const handleDeleteTask = (id) => dispatch({ type: 'deleted', id: id })

    return (
        <div className="todo-main">
            <Container className={'todo-container'}>
                <TodoAdd onAddTask={handleAddTask} />
                <TodoList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
            </Container>
        </div>
    );
}

export default App;
