import React, { useState } from 'react';

const EditTodoForm = ({ editTodo, currentTodo, todos, saveEdit }) => {
  //initialize the state of the component
  const [input, setInput] = useState(currentTodo);

  //track Changes in the input field
  const handleChange = (e) => {
    setInput({...input, item: e.target.value});
  }

  const handleSave= e => {
    e.preventDefault()
    saveEdit(input);
  } 

  return (
    <form className="col s12 m4 l5 center fixed" onSubmit = {handleSave}>

      <div className="input-field">
          <input 
            className="pink-text text-darken-2"
            type="text"
            name="todo"
            autoFocus={true}
            required
            value={input.item}
            onChange={handleChange}
            />
          <label className="pink-text text-lighten-2" htmlFor="todo">Edit todo</label>
        </div>
        
        <button className="btn-large waves-effect waves-light purple darken-4 pink-text text-lighten-2">Save</button>

        <button className="btn-large waves-effect waves-light grey lighten-2 grey-text text-darken-2">Cancel</button>
    </form>
  )
}

export default EditTodoForm;