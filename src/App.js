import React, { Component } from "react";
import "./App.css";
import task from "./sample/task.json";

class App extends Component {
  state = {
    task: task,
  };
  render() {
    return (
      <div>
        {this.state.task.map((e) => (
          <p key={e.id}>
            {e.title} - {e.description} - {e.id}
          </p>
        ))}
      </div>
    );
  }
}
export default App;
