import React, { useState } from 'react';
import AddTodoForm from './Forms/AddTodoForm';
import EditTodoForm from './Forms/EditTodoForm';


// Render the todo list
const Todos = () => {

  //declaring state AND initial state of todo components
  const initial = {item: null, id: null};
  const todoList = [{item: 'eat', id: 1}, {item: 'sleep', id: 2}];
  const [todos, setTodos] = useState(todoList);
  const [isEdit, setEdit] = useState(false);
  const [currentTodo, setCurrentTodo] = useState();

  // add a new todo item
  const addTodo = (todo) => {
    if(todo.length){
      setTodos([...todos, {item: todo, id: todos.length+1}]);
    }
    
  }

  //delete a todo item
  const deleteTodo = (id) => {
    setEdit(false);
    setTodos(todos.filter(todo => todo.id!==id))
  }

  // turns on edit mode and identifies the selected todo item
  const editTodo = (todo) => {
    setEdit(true);
    setCurrentTodo({item: todo.item, id: todo.id});
  }

  // saves changes made to the current item and displays it in the todo list
  const saveEdit = (item) => {
    setEdit(false);
    setTodos(todos.map(todo => todo.id === item.id ? item  : todo));
  }

  //cancels the current edit action
  const cancelEdit = (e) => {
    e.preventDefault();
    setEdit(false);
    setCurrentTodo(initial);
  }
  

  return (
    <div className="row">
      <ul className="col s12 m8 l7 todos">
        {

          //checks if the current todo list and displays the items if it is not empty 
          todos.length 
          ? todos.map(todo => 
            <li className="line todo-items Purple" key={todo.id}>
              <label className="label">
                <input type="checkbox" htmlFor={`#${todo.item}`}/>
                <span id={todo.item} className="item pinkText">{todo.item}</span>
              </label>
              <div className="line icons pinkText">
                <p><i className="fas fa-pen" onClick={()=> editTodo(todo)}/></p>
                <p><i className="fas fa-trash-alt redText" onClick={() => deleteTodo(todo.id)}/></p>
              </div>
            </li>
          ) 
          : <h5 className="blue-text text-darken-4 center">No todos yet!</h5>
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