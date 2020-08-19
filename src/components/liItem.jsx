import React, { Component } from 'react'
class LiItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonFlag:false,
            flagIndex:''
        }
    }
    itemEnter(id) {
        setTimeout(()=>{
            this.setState({
                buttonFlag:true,
                flagIndex:id
            })
        },0)
    }
    itemLeave(id) {
        setTimeout(()=>{
            this.setState({
                buttonFlag:false,
                flagIndex:id
            })
        },0)
    }
    doneItem(item){
        item.isDone=true
        this.setState({
            buttonFlag:false,
            // flagIndex:-1
        })
        this.props.TodoDone(this)
    }
    render() {
        return (
            <div id="li_item">
                {this.props.list.filter(item=>item.isDone===false).map(item => {
                    return <li key={item.id} onMouseEnter={this.itemEnter.bind(this,item.id)} onMouseLeave={this.itemLeave.bind(this,item.id)}>
                        <span className="left">{item.do}</span>
                        <span className="right">{item.time}</span>
                        {this.state.buttonFlag&&this.state.flagIndex===item.id?( <button className="iconfont done" onClick={this.doneItem.bind(this,item)}>&#xe60a;</button>):null}
                    </li>
                })}
            </div>

        )
    }
}
export default LiItem