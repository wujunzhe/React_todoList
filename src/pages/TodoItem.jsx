import React,{Component} from 'react'
import LiItem from '../components/liItem'
import '../static/css/todoItem.less'
class TodoItem extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    setItem=(res)=>{
        this.props.changeFalse(res.props.list)
    }
    render(){
        return(
            <div id="todo_item">
                <ul>
                    <LiItem TodoDone={this.setItem.bind(this)}  list={this.props.list?this.props.list:['']}></LiItem>
                </ul>
            </div>
        )
    }
}
export default TodoItem