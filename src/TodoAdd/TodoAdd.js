import { Component } from "react";

export default class TodoAdd extends Component {
  state = {
    task: "",
  };

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
      <form className="FormAlign" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add Task"
          value={this.state.task}
          onChange={this.handleChange}
          className="TaskPlaceholder"
        />
        <button className="AddButton buttonColor" type="submit">
          Add
        </button>
      </form>
    );
  }
}
