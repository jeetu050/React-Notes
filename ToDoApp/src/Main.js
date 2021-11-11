import React, { Component } from "react";
import "./Main.css";
import TaskList from "./TaskList";
class Main extends Component {
  render() {
    return (
      <div className="Main">
        <h1>Todo List</h1>
        <TaskList />
      </div>
    );
  }
}
export default Main;
