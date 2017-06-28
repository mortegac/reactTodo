import React, { Component } from 'react';
import { connect } from 'react-redux'   //CONECTO REDUX 

import logo from './logo.svg';
import './App.css';

import TodoList from './components/TodoList/index';
import TodoForm from './components/TodoForm/index';
import Header from './components/Header/index';

//  <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>- TODO CREADOS - </h2>
//         </div>
//  </div>

class App extends Component {
  render() {
    const { todos } = this.props
    return (
        <div>
          <Header />
          <p className="App-intro">
            <TodoForm {...this.props} />
            <TodoList {...this.props} />
          </p>
        </div>
        
      
    );
  }
}

//To get started, edit <code>src/App.js</code> and save to reload.

const mapStateToProps = state => {
//Permite seleccionar solo lo que utilizare y no todo el state
//Por default se inyecta todo
  return {
    todos: state.todo.data,
    todoInput: state.todoForm.todo,
  }
}

const mapDispatchToProps = dispatch => ({
//Permite seleccionar las accciones que necesito despachar en la aplicacion
//Por default no inyecta nada   
  handleSubmit: (e, todo) => {
    e.preventDefault()
    console.log("llamando a ... handleSubmit");
    dispatch({ type: 'ADD_TODO', payload: todo })
     console.log(todo);
    
    dispatch({ type: 'CHANGE_TODO', payload: '' })
  },
  handleChange: x => dispatch({ type: 'CHANGE_TODO', payload: x.target.value })
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
