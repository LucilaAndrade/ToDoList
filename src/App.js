import React, { Component } from "react";
import "./App.css";
import task from "./sample/task.json";
import Task from "./components/Task.js";

class App extends Component {
  state = {
    task: task,
  };
  render() {
    return (
      <div>
        <Task tasks={this.state.task} />
      </div>
    );
  }
}
export default App;
