import React,{Component} from 'react'
import '../static/css/header.css'
import Clock from '../components/clock'
class Header extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <div id="header">
                <Clock></Clock>
            </div>  
        )
    }
}
export default Header