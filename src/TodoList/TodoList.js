import React, { Component } from "react";
import ToCompleteList from "../ToCompleteList/ToCompleteList";
import CompletedList from "../CompletedList/CompletedList";
import TodoAdd from "../TodoAdd/TodoAdd";
import Progress from "../Progress/Progress";
import ResetButton from "../ResetButton/ResetButton";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTasks: [],
      completedTasks: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit = (task) => {
    this.setState({
      todoTasks: [...this.state.todoTasks, task],
    });
  };

  handleDelete = (todoId) => {
    const todoTasks = this.state.todoTasks;
    const completedTasks = this.state.completedTasks;

    if (todoTasks.find((x) => x === todoId)) {
      this.setState({ completedTasks: [...completedTasks, todoId] });
      this.setState({ todoTasks: todoTasks.filter((e) => e !== todoId) });
    } else if (completedTasks.find((x) => x === todoId)) {
      this.setState({ todoTasks: [...todoTasks, todoId] });
      this.setState({
        completedTasks: completedTasks.filter((e) => e !== todoId),
      });
    }
  };

  handleReset = () => {
    this.setState({ todoTasks: [] });
    this.setState({ completedTasks: [] });
  };

  render() {
    return (
      <div>
        <TodoAdd onFormSubmit={this.handleSubmit} />

        <div className="blocks">
          <ToCompleteList
            task={this.state.todoTasks}
            onDelete={this.handleDelete}
          />
          <CompletedList
            task={this.state.completedTasks}
            onDelete={this.handleDelete}
          />
        </div>
        <Progress
          todo={this.state.todoTasks}
          complete={this.state.completedTasks}
        />
        <ResetButton onClick={this.handleReset} />
      </div>
    );
  }
}
