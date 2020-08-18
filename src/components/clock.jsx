import React,{Component} from 'react'
import '../static/css/clock.css'
class Clock extends Component {
    constructor(props){
        super(props)
        this.state={
            date:new Date()
        }
    }
    componentDidMount() {
        this.timer = setInterval((()=>{
           this.time()
       }),1000)
   }
   componentWillUnmount() {
       clearInterval(this.timer)
   }
   time() {
       this.setState({
           date:new Date()
       })
   }
    render() {
        return (
            <div id="clock">
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        );
    }
}
export default Clock