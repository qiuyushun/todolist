import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import TodoItem1 from "./TodoItem1";
import TodoItem2 from"./TodoItem2";
import './TodoList.css';

class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      inputValue:'',
      todolist:[],
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
            onChange = {this.handleInputChange}
          />
          <button id="sub" onClick={this.handleClick}>提交</button>
          </section>
        </header>

        <div className="content">
          <h1>未完成<span id="todocount">{this.state.todolist.length}</span></h1>
          <ol id="todolist">
            {
              this.state.todolist.map((item,index)=>{
                return(
                  <TodoItem1
                    item={item} index={index}
                    contentDelete={this.handleDelete}
                    contentCheck={this.handleCheck}
                  />
                )
              })
            }
          </ol>
          <h1>已经完成<span id="donecount">{this.state.donelist.length}</span></h1>
          <ol id="donelist">
            {
              this.state.donelist.map((item,index)=>{
                return(
                  <TodoItem2
                    item={item} index={index}
                    contentDelete={this.handleDelete2}
                    contentCheck={this.handleCheck2}
                  />
                )
              })
            }
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

  //提交方法
  handleClick=()=>{
    const {todolist,inputValue} = this.state;
    this.setState({
      todolist:[...todolist,inputValue],
      inputValue:'',
    })
  }
  // 按下按钮
  handleCheck=(item,index)=>{
    const todolist = this.state.todolist;
    const donelist = this.state.donelist;
    donelist.push(item);
    todolist.splice(index,1)
    this.setState({
      todolist:todolist,
      donelist:donelist
    })
  }
  // 按下按钮2
  handleCheck2=(item,index)=>{
    const todolist = this.state.todolist;
    const donelist = this.state.donelist;
    todolist.push(item);
    donelist.splice(index,1)
    this.setState({
      todolist:todolist,
      donelist:donelist
    })
  }

  //删除1
  handleDelete=(index)=>{
    const todolist =[...this.state.todolist];
    todolist.splice(index,1)
    this.setState({
      todolist:todolist
    })
  }
  //删除2
  handleDelete2=(index)=>{
    const donelist =[...this.state.donelist];
    donelist.splice(index,1)
    this.setState({
      donelist:donelist
    })
  }

  // 清除所有的方法
  clear(){
    const todolist = [];
    const donelist = []
    this.setState({
      todolist:todolist,
      donelist:donelist
    })
  }

}

export default TodoList;
