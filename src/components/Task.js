import React, { Component } from "react";
//import PropTypes from "prop-types";

class Task extends Component {
  state = {
    done: this.props.task.done,
    delete: false,
  };

  getDoneStyle() {
    return {
      fontSize: "20px",
      color: this.state.done ? "gray" : "black",
      textDecoration: this.state.done ? "line-through" : "none",
    };
  }

  onDeleete(id) {
    this.setState({ delete: true });
    this.props.deleteTask(id);
  }
  render() {
    const { task } = this.props;
    if (this.state.delete) {
      return null;
    } else {
      if (this.state.done) {
        return (
          <div className="Task" id={task.id} style={this.getDoneStyle()}>
            <h3 className="titulo">
              #{task.id} {task.title}
              <button style={btnDelete} onClick={() => this.onDeleete(task.id)}>
                <span role="img" aria-label="trash emoji">
                  🗑️
                </span>
              </button>
            </h3>
            <div>
              <p>{task.description}</p>
            </div>
          </div>
        );
      } else {
        return (
          <div className="Task" id={task.id} style={this.getDoneStyle()}>
            <h3 className="titulo">
              #{task.id} {task.title}
              <div>
                {" "}
                <button
                  style={btnDone}
                  onClick={() => this.setState({ done: !this.state.done })}
                >
                  <span role="img" aria-label="done emoji">
                    ✅
                  </span>
                </button>
                <button
                  style={btnDelete}
                  onClick={() => this.setState({ delete: true })}
                >
                  <span role="img" aria-label="trash emoji">
                    🗑️
                  </span>
                </button>
              </div>
            </h3>
            <div>
              <p>{task.description}</p>
            </div>
          </div>
        );
      }
    }
  }
}

const btnDelete = {
  fontSize: "20px",
  background: "rgba(250, 44, 44, 0.445)",
  border: "none",
  padding: "10px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};
const btnDone = {
  fontSize: "20px",
  border: "none",
  background: "rgba(51, 250, 44, 0.445)",
  padding: "10px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};
export default Task;
