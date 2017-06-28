import React, { Component } from 'react'
import './Todolist.css'

class TodoList extends Component {
  render() {
    const LisTodos = this.props.todos;
    

    console.log("COMPONENTS");
    console.log(LisTodos);
    return (
        <div>
         <ul>
          <li>{ LisTodos.map(t => t) }</li>
        </ul>
        </div>
    )
  }
}


export default TodoList;

