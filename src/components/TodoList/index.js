import React, { Component } from 'react'
import './Todolist.css'

class TodoList extends Component {
  render() {
    const LisTodos = this.props.todos;
    
    console.log("COMPONENTS");
    console.log(LisTodos);
    return (
        <div className="content">
          
          {LisTodos.map((item,index) => {
             return (
              <div className="card" key={index}>
                <div className="card-accion ion-ios-list-outline"></div>
                <div className="card-titulo">
                  <span className="txtId"><b className="ico ion-ios-arrow-left"></b> { index } <b className="ico ion-ios-arrow-right"></b></span>
                  <span className="Titulo">
                      { item }
                  </span></div>
                
              </div>
             )
           })}

        </div>
    )
  }
}


export default TodoList;





/*
 <ul>
          
          {LisTodos.map((item,index) => {
             return (
              <li key={index}>{ item }-{ index }</li>
             )
           })}

        </ul>

        <TodoDetail />
 */