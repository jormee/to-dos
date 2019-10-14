import React, { useState, useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import { ThemeContext } from '../../contexts/ThemeContext';

const AddTodoForm = () => {

  const { addTodo } = useContext(TodoContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);

  const theme = isLightTheme ? light : dark;

  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput('');
  }

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return(

    <form className="col s12 m4 l5 center" onSubmit={handleSubmit}>
      <div className="input-field">
        <input 
          style={{color: theme.color}}
          type="text"
          name="todo"
          autoComplete="off"
          autoFocus={true}
          required
          value={input}
          onChange={handleChange}/>
        <label htmlFor="todo">Enter a new todo item</label>
      </div>
      
      <p type="submit" id="addTodo" className="button center-align" style={{backgroundColor: theme.header, color: theme.headerColor}} onClick={handleSubmit}>Add Todo</p>
    </form>
  )
}

export default AddTodoForm