import { useState } from 'react'

export default function InputBar({ updateTodos }) {

    const [todoInput, setTodoInput] = useState('')

    const updateInput = (e) => {

        setTodoInput(e.target.value)
    }

    const createTodo = () => {

        updateTodos(todoInput)
    }

    return (
        <div>
            <input placeholder='Enter todo here' value={todoInput} onChange={updateInput} />
            <button onClick={createTodo}>Add</button>
        </div>

    )
}