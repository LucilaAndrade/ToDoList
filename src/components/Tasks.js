import React, { Component } from "react";
import Task from "./Task";
import "./Task.css";

class Tasks extends Component {
 
  
  render() {
    return this.props.tasks.map((task) => (
      <Task task={task} key={task.id} deleteTask={()=>this.props.deleteFunction} />
    ));
  }
}

export default Tasks;
