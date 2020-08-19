import React,{Component, Fragment} from 'react'
class DoneLiItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonFlag:false,
            flagIndex:-1
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
        item.isDone=false
        this.setState({
            buttonFlag:false,
        })
        this.props.TodoDoneChange(this)
    }
    delItem(item) {
        this.props.TodoItemDel(this,item.id)
    }
    render(){
        return(
            <div id="done_li_item">
                {this.props.list.filter(item=>item.isDone===true).map(item => {
                    return <li key={item.id} onMouseEnter={this.itemEnter.bind(this,item.id)} onMouseLeave={this.itemLeave.bind(this,item.id)}>
                        <span className="left">{item.do}</span>
                        <span className="right">{item.time}</span>
                        {this.state.buttonFlag&&this.state.flagIndex===item.id?(<Fragment><button className="iconfont del" onClick={this.delItem.bind(this,item)}>&#xe634;</button> <button className="iconfont done" onClick={this.doneItem.bind(this,item)}>&#xe624;</button></Fragment>):null}
                    </li>
                })}
            </div>
        )
    }
}
export default DoneLiItem