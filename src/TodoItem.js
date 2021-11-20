import React from "react";

class TodoItem extends React.Component{


    render() {
      return (
              <li key={this.props.index} >
                    <input type="checkbox"  
                          onClick={(e)=>{this.contentCheck(e,this.props.item,this.props.index)}}></input>
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


export default TodoItem;
