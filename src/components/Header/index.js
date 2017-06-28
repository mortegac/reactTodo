import React, { Component } from 'react'
import './header.css'

class Header extends Component {
    render(){
    //  console.log(this.props);
        return (
            <div className="header">
                <h2>TODO LIST</h2>
            </div>
        )
    }
}

export default  Header;