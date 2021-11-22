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

    handleInputChange=(event)=>{
      // const target = event.target;
      // const checked = target.type ;
      // console.log(checked);
      // console.log(target)
      // checked = this.props.item.checked;
    }
    contentDelete=()=>{
      this.props.contentDelete(this.props.index)
    }
  }


export default TodoItem;
