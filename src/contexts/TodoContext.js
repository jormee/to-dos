import React, { createContext, useState, useEffect } from 'react';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {

  //declaring state AND initial state of todo components
  const initial = {item: null, id: null};
  const todoList = [];
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

  useEffect(() => {
    setCurrentTodo(currentTodo);
  }, [currentTodo])

  return(
    <TodoContext.Provider 
    value={{ initial, todoList, todos, setTodos, isEdit, setEdit, currentTodo, setCurrentTodo, addTodo, deleteTodo, editTodo, saveEdit, cancelEdit}}>
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider;