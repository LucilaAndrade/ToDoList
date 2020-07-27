import React, { Component } from "react";
import "./App.css";
import tasksFromDoc from "./sample/task.json";
import Tasks from "./components/Tasks.js";
import TaskDialog from "./components/TaskDialog";

class App extends Component {
  state = {
    tasks: tasksFromDoc,
    showTasks: true,
  };

  onSubmit = (e) => {
    e.preventDefault();
    tasksFromDoc.push({
      id: this.state.tasks.length,
      title: e.target.title.value,
      description: e.target.description.value,
      done: false,
    });

    localStorage.setItem(tasksFromDoc, JSON.stringify(tasksFromDoc));
    this.setState({ tasks: tasksFromDoc, showTasks: true });
  };

  onDelete = (id) => {
    this.state.tasks = tasksFromDoc.filter(function (item) {
      return item.id !== id;
    });

    localStorage.setItem(tasksFromDoc, JSON.stringify(tasksFromDoc));
    this.setState({ tasks: tasksFromDoc, showTasks: true });
  };

  render() {
    if (this.state.showTasks) {
      return (
        <div>
          <button
            style={newBtn}
            onClick={() => this.setState({ showTasks: false })}
          >
            <span role="img" aria-label="trash emoji">
              ➕
            </span>
          </button>
          <div className="App">
            <Tasks tasks={this.state.tasks} deleteFunction={this.onDelete} />
          </div>
        </div>
      );
    } else {
      return (
        <span>
          <TaskDialog onSubmit={this.onSubmit}></TaskDialog>
          <div>
            <div className="App">
              <br />
              <br />
              <Tasks tasks={this.state.tasks} />
            </div>
          </div>
        </span>
      );
    }
  }
}

const newBtn = {
  fontSize: "20px",
  background: "rgba(174, 44, 250, 0.39)",
  border: "10px",
  padding: "10px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
  margin: "5%",
};

export default App;
