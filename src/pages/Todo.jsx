import React, { Component } from 'react'
import Header from './Header'
import TodoInput from './TodoInput'
class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div id="todo">
                <Header></Header>
                <TodoInput></TodoInput>
            </div>

        )
    }
}
export default Todo