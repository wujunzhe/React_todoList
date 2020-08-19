import React, { Component } from 'react'
import '../static/css/todoDone.less'
import DoneLiItem from '../components/doneLiItem'
class TodoDone extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    setItem(res){
        this.props.changeTrue(res.props.list)
    }
    del(item,id){
      let idx = item.props.list.findIndex(ele=>ele.id===id)
      item.props.list.splice(idx,1)
      this.props.delItem(item.props.list)
    }
    render() {
        return (
            <div id="todo_done">
                <ul>
                    <DoneLiItem TodoDoneChange={this.setItem.bind(this)} TodoItemDel={this.del.bind(this)} list={this.props.list?this.props.list:[]}></DoneLiItem>
                </ul>
            </div>
        )
    }
}
export default TodoDone