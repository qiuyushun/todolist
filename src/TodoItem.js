import React from "react";

class TodoItem extends React.Component{
    render() {
      return (
              <li>
                    <input type="checkbox"  checked={this.props.item.checked} onChange={this.handleInputChange}
                          onClick={(e)=>{this.props.contentCheck(this.props.item)}}></input>
                    <p>{this.props.item.content}</p>
                    <a  onClick={this.contentDelete}
                        href= "###">
                    </a>
              </li>
        );
    }

    handleInputChange=(e)=>{
      this.props.item.checked = e.target.checked
    }
    contentDelete=()=>{
      this.props.contentDelete(this.props.index)
    }
  }


export default TodoItem;
