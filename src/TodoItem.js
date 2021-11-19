import React from "react";
import react from "react"


class TodoItem extends React.Component(){
    constructor(props){
        super(props);
    }
    render(){
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
    }
}


export default TodoItem;
