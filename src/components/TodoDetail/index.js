import React, { Component } from 'react'
import './TodoDetail.css'

class TodoDetail extends Component {
    render(){
        const todo = this.props

     console.log(this.props);
        return (
            <div className="card">
                <div class="card_titulo"><h5>{todo}</h5></div>
            </div>
        )
    }
}

export default TodoDetail;