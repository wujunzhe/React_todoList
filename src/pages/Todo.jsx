import React, { Component } from 'react'
import Header from './Header'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import TodoDone from './TodoDone'
class Todo extends Component {
    constructor(props) {
        super(props)
        if (window.localStorage.getItem('todo') && window.localStorage.getItem('todo')!=='[]') {
            var id = JSON.parse(window.localStorage.getItem('todo'))[JSON.parse(window.localStorage.getItem('todo')).length - 1].id
        }
        this.state = {
            id: id ? id : -1,
            todoItems: [],
            iptVal: ''
        }
    }
    componentDidMount() {
        let list = JSON.parse(window.localStorage.getItem('todo'))
        console.log(list);
        if (list) {
            this.setState({
                todoItems: list,
                iptVal: ''
            })
        }
    }
    componentDidUpdate() {
        window.localStorage.setItem('todo', JSON.stringify(this.state.todoItems))
    }
    // 输入框变化监听
    iptChange(val) {
        this.setState({
            iptVal: val
        })
    }
    // 点击添加项目
    addItem() {
        let id = this.state.id += 1
        let item = {
            id,
            do: this.state.iptVal,
            time: new Date().toLocaleTimeString(),
            isDone: false
        }
        this.setState({
            todoItems: [...this.state.todoItems, item],
            iptVal: ''
        })
    }
    // 回车键添加项目
    enter(code) {
        if (code === 13) {
            let id = this.state.id += 1
            let item = {
                id,
                do: this.state.iptVal,
                time: new Date().toLocaleTimeString(),
                isDone: false
            }
            this.setState({
                todoItems: [...this.state.todoItems, item],
                iptVal: ''
            })
        }
    }
    // isDone监听
    changeItem(list) {
        this.setState({
            todoItems: list,
            iptVal: ''
        })
    }
    delItem(list) {
        if(list===[]){
            window.localStorage.removeItem('todo')
            this.setState({
                id:-1,
                todoItems: list,
                iptVal: ''
            })
        }
        this.setState({
            todoItems: list,
            iptVal: ''
        })
    }
    render() {
        return (
            <div id="todo">
                <Header></Header>
                <TodoInput add={this.addItem.bind(this)} val={this.state.iptVal} change={this.iptChange.bind(this)} enter={this.enter.bind(this)}></TodoInput>
                <TodoItem list={this.state.todoItems} changeFalse={this.changeItem.bind(this)}></TodoItem>
                <TodoDone list={this.state.todoItems} changeTrue={this.changeItem.bind(this)} delItem={this.delItem.bind(this)}></TodoDone>
            </div>

        )
    }
}
export default Todo