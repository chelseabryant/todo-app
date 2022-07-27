
import './App.css';
import InputBar from './components/InputBar';
import Title from './components/Title';
import { useState } from 'react'
import Todo from './components/Todo';

function App() {

  const [todos, setTodos] = useState([])

  const updateTodos = (newTodo) => {
    if (!todos.includes(newTodo) && newTodo) {
      setTodos([...todos, newTodo])
    }
  }

  return (
    <div className="App">
      <Title>
        <h1>Ed's shit</h1>
      </Title>
      <InputBar updateTodos={updateTodos} />
      {todos.map(todo => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default App;
