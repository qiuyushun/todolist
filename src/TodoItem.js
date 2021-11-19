import React from "react";

class TodoItem extends React.Component{
    render() {
      return (
        <div className="content">
          <h1>未完成<span id="todocount">{this.props.list.length}</span></h1>
          <ol id="todolist">
            {this.props.list.filter(item=>(item.flag === 0)).map((item,index)=>{
              return<li key={index}>
                    <input type="checkbox" checked={false} onClick={(e)=>{this.handleCheck(e,item,index)}}></input>
                    <p>{item.content}</p>
                    <a  onClick={this.handleDelete}
                        href= "###"
                    >
                    </a>
              </li>
            })}
          </ol>
          {/* <h1>已经完成<span id="donecount">{this.props.donelist.length}</span></h1> */}
          {/* <ol id="donelist">
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
          </ol> */}
        </div>
        );
      }
      
    handleCheck=(index)=>{
      this.props.handleCheck(index)
    }
    handleDelete=(index)=>{
      this.props.handleDelete(index)
    }
    handleCheck2=(index)=>{
      this.props.handleCheck2(index)
    }
    handleDelete2=(index)=>{
      this.props.handleDelete2(index)
    }
  }


export default TodoItem;
