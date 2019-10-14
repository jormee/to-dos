import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const EditTodoForm = ({ editTodo, currentTodo, todos, saveEdit, cancelEdit }) => {

  const { isLightTheme, light, dark } = useContext(ThemeContext);

  const theme = isLightTheme ? light : dark;

  //initialize the state of the component
  const [input, setInput] = useState(currentTodo);

  //track Changes in the input field
  const handleChange = (e) => {
    setInput({...input, item: e.target.value});
  }

  //saves the current edit action
  const handleSave= e => {
    e.preventDefault()
    saveEdit(input)
  } 

  

  return (
    <form className="col s12 m4 l5 center fixed">

      <div className="input-field">
          <input 
            style={{color: theme.color}}
            type="text"
            name="todo"
            autoComplete="off"
            autoFocus={true}
            value={input.item}
            onChange={handleChange}
            />
          <label htmlFor="todo">Edit todo</label>
        </div>
        
        <button className="button" style={{backgroundColor: theme.header, color: theme.headerColor}} onClick={handleSave}>Save</button>

        <button className="button" onClick={cancelEdit}>Cancel</button>
    </form>
  )
}

export default EditTodoForm;