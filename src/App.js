import './App.css';
import { Container } from "react-bootstrap";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import TasksProvider from "./components/TasksContext";

function App() {
    return (
        <div className="todo-main">
            <TasksProvider>
                <Container className={'todo-container'}>
                    <TodoAdd />
                    <TodoList />
                </Container>
            </TasksProvider>
        </div>
    );
}

export default App;
