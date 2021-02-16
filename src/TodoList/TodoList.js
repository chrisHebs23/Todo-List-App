import React, { Component } from "react";
import ToCompleteList from "../ToCompleteList/ToCompleteList";
import CompletedList from "../CompletedList/CompletedList";
import TodoAdd from "../TodoAdd/TodoAdd";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTest: ["Make bed", "Make kick Ass Projects"],
      completedTest: ["Sleep ", "Eat", "Shower"],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit = (task) => {
    this.setState({ todoTest: [...this.state.todoTest, task] });
  };

  handleDelete = (content) => {
    const todoTest = this.state.todoTest;
    const completedTest = this.state.completedTest;

    if (todoTest.find((x) => x === content)) {
      this.setState({ completedTest: [...completedTest, content] });
      this.setState({ todoTest: todoTest.filter((e) => e !== content) });
    } else if (completedTest.find((x) => x === content)) {
      this.setState({ todoTest: [...todoTest, content] });
      this.setState({
        completedTest: completedTest.filter((e) => e !== content),
      });
    }
  };

  render() {
    return (
      <div>
        <TodoAdd onFormSubmit={this.handleSubmit} />
        <div className="blocks">
          <ToCompleteList
            task={this.state.todoTest}
            onDelete={this.handleDelete}
          />
          <CompletedList
            task={this.state.completedTest}
            onDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}
