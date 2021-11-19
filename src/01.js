import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import './TodoList.css';

class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      inputValue:'',
      list:[],
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
          <button id="sub" onClick={this.handleClick}>提交</button>
          </section>
        </header>

        <div className="content">
          <h1>未完成<span id="todocount">{this.state.list.filter(item=>(item.flag === 0)).length}</span></h1>
          <ol id="todolist">
            {this.state.list.filter(item=>(item.flag === 0)).map((item,index)=>{
              return<li key={index}>
                    <input type="checkbox" onClick={(e)=>{this.handleCheck(e,item)}}></input>
                    <p>{item.content}</p>
                    <a  onClick={this.handleDelete.bind(this,index)}
                        href= "###"
                    >
                    </a>
              </li>
            })}
          </ol>
          <h1>已完成<span id="donecount">{this.state.list.filter(item=>(item.flag === 1)).length}</span></h1>
          <ol id="donelist">
          {this.state.list.filter(item=>(item.flag === 1)).map((item,index)=>{
              return<li key={index}>
                    <input type="checkbox" onClick={(e)=>{this.handleCheck2(e,item)}}></input>
                    <p>{item.content}</p>
                    <a  onClick={this.handleDelete.bind(this,index)}
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

  //修改内容的方法
  handleClick=()=>{
    const {list,inputValue} = this.state
    this.setState({
      list:[...list,{ flag:0, content:inputValue}],
      inputValue:'',
    })
  }
  // 按下按钮 flag改变为1
  handleCheck=(e,item)=>{
    const list = this.state.list ;
    console.log(item)
    console.log(e)
    this.setState({
      list:list
    })
  }
  // 按下按钮 flag 变为0
  handleCheck2=(e,item,)=>{
    const list = this.state.list;
    this.setState({
      list:list
    })
  }
  //删除
  handleDelete=(index)=>{
    const list =[...this.state.list];
    list.splice(index,1)
    this.setState({
      list:list
    })
  }

  // 清除所有的方法
  clear(){
    const list = [];
    this.setState({
      list:list,
    })
  }

}

export default TodoList;
