import React from "react";

class TodoItem2 extends React.Component{


    render() {
      return (
              <li>
                    <input type="checkbox"  checked={true}
                          onClick={(e)=>{this.contentCheck(this.props.item,this.props.index)}}></input>
                    <p>{this.props.item}</p>
                    <a  onClick={this.contentDelete}
                        href= "###">
                    </a>
              </li>
        );
    }
    contentCheck=()=>{
      this.props.contentCheck(this.props.item,this.props.index)
    }

    contentDelete=()=>{
      this.props.contentDelete(this.props.index)
    }
  }


export default TodoItem2;
