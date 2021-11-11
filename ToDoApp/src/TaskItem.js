import React, { Component } from "react";
import "./TaskItem.css";
class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    // this.handleCheck = this.handleCheck.bind(this);
  }
  //   handleCheck(evt) {
  //     this.props.classList.add("completed");
  //   }
  deleteTask(evt) {
    this.props.delete(this.props.name);
  }
  editTask(evt) {}
  render() {
    return (
      <tr>
        <td>
          <input type="checkbox" />
          {this.props.name}
        </td>
        <td>
          <button onClick={this.editTask} className="edit">
            Edit
          </button>
        </td>
        <td>
          <button onClick={this.deleteTask} className="delete">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
export default TaskItem;
