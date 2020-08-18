import React,{Component} from 'react'
class TodoInput extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <div id="ipt">
                <input type="text" placeholder="输入点什么吧"/>
            </div>
            
        )
    }
}
export default TodoInput