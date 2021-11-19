import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import './TodoList.css';

class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      inputValue:'',
      list:[],
      donelist:[],
    }
  }

  render(){
    return (
      <Fragment>
        <header>
          <section>
          <label>My todolist</label>
          <input type="text" id="add_list" name="add_list" placeholder="type here" required 
            value = {this.state.inputValue} 
            onChange = {this.handleInputChange.bind(this)}
          />
          <button id="sub" onClick={this.handleClick.bind(this)}>提交</button>
          </section>
        </header>
        <div className="content">
          <h1>未完成<span id="todocount">{this.state.list.length}</span></h1>
          <ol id="todolist">
            {this.state.list.filter(item=>(item.flag === 0)).map((item,index)=>{
              return<li key={index}>
                    <input type="checkbox" checked={false} onClick={(e)=>{this.handleCheck(e,item,index)}}></input>
                    <p>{item.content}</p>
                    <a  onClick={this.handleDelete.bind(this,index)}
                        href= "###"
                    >
                    </a>
              </li>
            })}
          </ol>
          <h1>已经完成<span id="donecount">{this.state.donelist.length}</span></h1>
          <ol id="donelist">
            {this.state.donelist.map((item,index)=>{
              return<li key={index}>
                    <input type="checkbox" checked={true} onClick={(e)=>{this.handleCheck2(e,item,index)}}></input>
                    <p>{item.content}</p>
                    <a  onClick={this.handleDelete2.bind(this,index)}
                        href= "###"
                    >
                    </a>
              </li>
            })}
          </ol>

        </div>
        
        <div id="clear">
          <button id="clearbutton" onClick={this.clear.bind(this)}><h3>全部清除</h3></button>
        </div>
      </Fragment>
    );
  }

  handleInputChange=(e)=>{
    this.setState({
      inputValue: e.target.value
    })
  }
  handleClick=()=>{
    const {list,inputValue} = this.state
    this.setState({
      list:[...list,{ flag:0, content:inputValue}],
      inputValue:'',
    })
  }

  handleCheck=(e,item,index)=>{
    const list = [...this.state.list]
    const donelist = [...this.state.donelist]
    list[index].flag=1
    donelist.push(list[index]);
    list.splice(index,1);
    this.setState({
      list:list,
      donelist:donelist
    })
  }
  handleCheck2=(e,item,index)=>{
    const list = [...this.state.list];
    const donelist = [...this.state.donelist];
    donelist[index].flag=0;
    list.push(donelist[index]);
    donelist.splice(index,1);
    this.setState({
      list:list,
      donelist:donelist
    })
  }
  handleDelete=(index)=>{
    const list =[...this.state.list];
    list.splice(index,1)
    this.setState({
      list:list
    })
  }
  handleDelete2=(index)=>{
    const donelist =[...this.state.donelist];
    donelist.splice(index,1)
    this.setState({
      donelist:donelist
    })
  }
  clear(){
    const list = [];
    const donelist = [];
    this.setState({
      list:list,
      donelist:donelist
    })
  }

}

export default TodoList;
