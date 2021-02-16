import { Component } from "react";

export default class TodoAdd extends Component {
  state = { task: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.task === "") return;
    this.props.onFormSubmit(this.state.task);
    this.setState({ task: "" });
  };

  handleChange = (e) => {
    this.setState({ task: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add Task"
          value={this.state.task}
          onChange={this.handleChange}
        />

        <button type="submit">Add</button>
      </form>
    );
  }
}
