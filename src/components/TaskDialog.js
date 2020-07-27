import React, { Component } from "react";
import tasks from "../sample/task.json";

class TaskDialog extends Component {
  render() {
    return (
      <div style={formFormat}>
        <h1>Nueva tarea</h1>
        <form style={formulario} onSubmit={this.props.onSubmit}>
          Titulo:{" "}
          <input type="text" name="title" placeholder="Task Title"></input>
          <br />
          <br /> Descripción:{" "}
          <input
            type="text"
            name="description"
            placeholder="Task Description"
          ></input>
          <button type="submit" style={newBtn}>
            <span role="img" aria-label="save emoji">
              💾
            </span>
          </button>
        </form>
      </div>
    );
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

const formFormat = {
  border: "10px",
  padding: "10px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
  background: "rgba(174, 44, 250, 0.39)",
};
const formulario = {
  float: "right",
  margin: "auto",
};
export default TaskDialog;
