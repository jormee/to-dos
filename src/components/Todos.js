import React, { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';
import { TodoContext } from '../contexts/TodoContext';

import AddTodoForm from './Forms/AddTodoForm';
import EditTodoForm from './Forms/EditTodoForm';



// Render the todo list
const Todos = () => {

  const { todos,  isEdit, currentTodo, addTodo, deleteTodo, editTodo, saveEdit, cancelEdit } = useContext(TodoContext);

  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  

  return (
    <div className="row todos" style={{backgroundColor: theme.bg, color: theme.color}}>
      <ul className="col s12 m8 l7 todos">
        {

          //checks if the current todo list and displays the items if it is not empty 
          todos.length 
          ? todos.map(todo => 
            <li className="line todo-items" key={todo.id} style={{backgroundColor: theme.ui, color: theme.color}}>
              <label className="label">
                <input type="checkbox" htmlFor={`#${todo.item}`}/>
                <span className="item" style={{color: theme.color}}>{todo.item}</span>
              </label>
              <div className="line icons">
                <p><i className="fas fa-pen" onClick={()=> editTodo(todo)}/></p>
                <p><i className="fas fa-trash-alt" onClick={() => deleteTodo(todo.id)}/></p>
              </div>
            </li>
          ) 
          : <div>
              <h5 className="center">No todos yet!</h5>
              <h6 className="center">Use the form to add todos.</h6>
            </div>
        }
      </ul>
      { 
        //checks if edit mode is on and displays the correct form based on the response
        
        !isEdit 
        ? <AddTodoForm addTodo={addTodo} className="col s12 m4 l5 forms"/>
        : <EditTodoForm 
            todos={todos} 
            currentTodo={currentTodo}
            cancelEdit={cancelEdit}
            editTodo={editTodo} 
            saveEdit={saveEdit} 
            className="col s12 m4 l5 forms" 
          />
      }  
    </div>
  )
}

export default Todos;