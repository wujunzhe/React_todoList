import React,{Component} from 'react'
import AddButton from '../components/addButton'
import '../static/css/input.less'
class TodoInput extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    change(e){
        this.props.change(e.target.value)
    }
    addItem(){
        this.props.add()
    }
    enterAdd(e) {
        this.props.enter(e.keyCode)
    }
    render(){
        return(
            <div id="ipt">
                <input value={this.props.val} onKeyUp={this.enterAdd.bind(this)} onChange={this.change.bind(this)} type="text" placeholder="输入点什么吧"/>
                <AddButton addItem={this.addItem.bind(this)}></AddButton>
            </div>
            
        )
    }
}
export default TodoInput