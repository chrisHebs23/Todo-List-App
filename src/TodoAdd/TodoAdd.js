import { Component } from "react";

export default class TodoAdd extends Component {
  constructor(props) {
    super(props);
    this.state = { id: `${Date.now()}`, task: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (e) => {
    let { id, task } = this.state;
    e.preventDefault();
    if (this.state.task === "") return;
    this.props.onFormSubmit(id, task);
    this.setState({ id: `${Date.now()}`, task: "" });
  };

  handleChange = (e) => {
    // let stateCopy = Object.assign({}, this.state);
    // stateCopy.tasks[0].task = e.target.value;
    // this.setState(stateCopy);
    let value = e.target.value;
    this.setState({ task: value });
  };

  render() {
    return (
      <form className="FormAlign" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder={"Add Task"}
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
