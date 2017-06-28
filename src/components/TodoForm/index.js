import React, { Component } from 'react'
import './TodoForm.css'

class TodoForm extends Component {
    render(){
        const { handleSubmit, handleChange, todoInput } = this.props

     console.log(this.props);
        return (
            <div className="bloque">
                    <form onSubmit={e => handleSubmit(e, todoInput)}>
                        <input  value={todoInput} 
                                onChange={handleChange}  
                                placeholder ="Ingrese el Todo" 
                                type="text"/>
                    </form>
            </div>
        )
    }
}

export default TodoForm;