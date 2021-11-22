import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import './TodoList.css';
import TodoItem from "./TodoItem";

class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      inputValue:'',
      list:[
        {
          content:'吃饭',
          flag:false
        },{
          content:'睡觉',
          flag:false
        },{
          content:'打豆豆',
          flag:true
        }
    ],
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
            onChange = {this.handleInputChange}
          />
          <button id="sub" onClick={this.handleClick}>提交</button>
          </section>
        </header>

        <div className="content">
          <h1>未完成<span id="todocount">{this.state.list.filter(item=>(item.flag === false)).length}</span></h1>
          <ol id="todolist">
            {this.state.list.filter(item=>(item.flag === false)).map((item,index)=>{
              return<li key={index}>
                    <input type="checkbox" checked={item.flag} onClick={(e)=>{this.handleCheck(e,item)}}></input>
                    <p>{item.content}</p>
                    <a  onClick={this.handleDelete.bind(this,index)}
                        href= "###"
                    >
                    </a>
              </li>
            })}
          </ol>
          <h1>已完成<span id="donecount">{this.state.list.filter(item=>(item.flag === true)).length}</span></h1>
          <ol id="donelist">
          {this.state.list.filter(item=>(item.flag === true)).map((item,index)=>{
              return<li key={index}>
                    <input type="checkbox" checked={item.flag} onClick={(e)=>{this.handleCheck(e,item)}}></input>
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
      list:[...list,{ content:inputValue,flag:false }],
      inputValue:'',
    })
  }
  // 按下按钮 flag改变为true
  handleCheck=(e,item)=>{
    const list = this.state.list ;
    item.flag = !item.flag 
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
