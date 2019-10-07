import React, { useState } from 'react';
import AddTodoForm from './Forms/AddTodoForm';
import EditTodoForm from './Forms/EditTodoForm';


// Render the todo list
const Todos = () => {
  const todoList = [];
  const [todos, setTodos] = useState(todoList);
  const [isEdit, setEdit] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({item: null, id: null});

  // add a new todo item
  const addTodo = (todo) => {
    setTodos([...todos, {item: todo, id: todos.length+1}]);
  }

  //delete a todo item
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id!==id))
  }

  const editTodo = (todo) => {
    setEdit(true);
    setCurrentTodo({item: todo.item, id: todo.id});
  }

  const saveEdit = (item) => {
    setEdit(false);
    setTodos(todos.map(todo => todo.id === item.id ? item  : todo));
  }
  

  return (
    <div className="row col s12 m8 l7">
      <ul className="col s12 m8 l7">
        {
          todos.length 
          ? todos.map(todo => 
            <li className="row left-align" key={todo.id}>
              <label className="col s8 purple darken-4 pink-text text-lighten-2">
                <input type="checkbox" htmlFor={`#${todo.item}`}/>
                <span id={todo.item} className="truncate">{todo.item}</span>
              </label>
              <div className="row col s4">
                <p><i className="fas fa-pen col s4 purple-text text-darken-4" onClick={()=> editTodo(todo)}/></p>
                <p><i className="fas fa-trash-alt red-text col s4" onClick={() => deleteTodo(todo.id)}/></p>
              </div>
            </li>
          ) 
          : <h5 className="blue-text text-darken-4 white center">No todos yet!</h5>
        }
      </ul>

      { 
        !isEdit 
        ? <AddTodoForm addTodo={addTodo} className="col s12 m4 l5"/>
        : <EditTodoForm todos={todos} currentTodo={currentTodo} editTodo={editTodo} saveEdit={saveEdit} className="col s12 m4 l5"/>
      }     
    </div>
  )
}

export default Todos;