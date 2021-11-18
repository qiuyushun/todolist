import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import './TodoList.css';

class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      inputValue:'',
      list:[],
      todoCount:0,
      doneCount:0,
      flag:false
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
          <h1>未完成<span id="todocount">0</span></h1>
          <ol id="todolist">
            { this.state.list.map((item,index)=>{
                return <li key={index}
                          >
                          <input type="checkbox"/>
                          <p>{item}</p>
                          <a  onClick={this.handleDelete.bind(this,index)}
                              href="###"
                          >
                          </a>
                        </li> 
              })
            }
          </ol>
          <h1>已完成<span id="donecount">0</span></h1>
          <ol id="donelist">
          </ol>
        </div>
        
        <div id="clear">
          <button id="clearbutton" onClick={this.clear.bind(this)}><h3>全部清除</h3></button>
        </div>
      </Fragment>
    );
  }

  handleInputChange(e){
    this.setState({
      inputValue: e.target.value
    })
  }
  handleClick(){
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:'',
    })
  }

  handleDelete(index){
    // console.log(index)
    const list =[...this.state.list];
    list.splice(index,1)
    this.setState({
      list:list
    })
  }
  clear(){
    const list = [];
    this.setState({
      list:list
    })
  }

}

export default TodoList;
