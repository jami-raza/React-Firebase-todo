import React,{useState} from 'react'
import './App.css';



function App() {
  const [todos, setTodos] = useState(['Beard balm on going','product launch is on 8th Jan'])
  const [input, setInput] = useState('')
  return (
    <div className="App">
      <h1>Todos</h1>
      <input />
      <button>Add todos</button>
      <ul>
        {todos.map(todo => ( 
          
          <li>{todo}</li>
        
        ))}
      </ul>
    </div>
  );
}

export default App;
