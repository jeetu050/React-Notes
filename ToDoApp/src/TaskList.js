import React, { Component } from "react";
import "./TaskList.css";
import CreateTask from "./CreateTask";
import TaskItem from "./TaskItem";
class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.addList = this.addList.bind(this);
    this.deleteList = this.deleteList.bind(this);
  }
  addList(item) {
    this.setState((currState) => ({ items: [...currState.items, item] }));
  }
  deleteList(item) {
    let arr = this.state.items.filter((x) => x !== item);
    this.setState({ items: arr });
  }
  render() {
    let lists = this.state.items.map((item) => (
      <TaskItem name={item} key={item} delete={this.deleteList} />
    ));
    return (
      <div className="TodoList">
        <CreateTask add={this.addList} />
        <table border="0">
          <tbody>
            <tr>
              <th>Task</th>
              <td></td>
              <th className="Actions">Actions</th>
            </tr>
            {lists}
          </tbody>
        </table>
      </div>
    );
  }
}
export default TaskList;
