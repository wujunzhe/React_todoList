import React,{Component} from 'react'
import '../static/css/button.css'
class AddButton extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    addItem() {
        this.props.addItem()
    }
    render(){
        return(
            <div id="btn">
                <button onClick={this.addItem.bind(this)}>+</button>
            </div>
        )
    }
}
export default AddButton