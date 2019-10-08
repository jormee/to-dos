import React, { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {
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
            className="pink-text text-darken-2"
            type="text"
            name="todo"
            autoFocus={true}
            required
            value={input}
            onChange={handleChange}/>
          <label className="pink-text text-lighten-2" htmlFor="todo">Enter a new todo item</label>
        </div>
        
        <button type="submit" id="addTodo" className="btn-large waves-effect waves-light purple darken-4 pink-text text-lighten-2" onClick={handleSubmit}>Add Todo</button>
      </form>
    )
  }

export default AddTodoForm