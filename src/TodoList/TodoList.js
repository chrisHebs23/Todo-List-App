import React, { Component } from "react";
import ToCompleteList from "../ToCompleteList/ToCompleteList";
import CompletedList from "../CompletedList/CompletedList";
import TodoAdd from "../TodoAdd/TodoAdd";
import Progress from "../Progress/Progress";
import ResetButton from "../ResetButton/ResetButton";

let position;

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTasks: [],
      completedTasks: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    this.handleDeleteComplete = this.handleDeleteComplete.bind(this);
  }

  handleSubmit = (id, task) => {
    this.setState({
      todoTasks: [...this.state.todoTasks, { id: id, task: task }],
    });
  };

  handleDeleteTodo = (todoId) => {
    const todoTasks = this.state.todoTasks;
    const completedTasks = this.state.completedTasks;

    let index = todoTasks.findIndex((item) => item.id === todoId);
    if ((index) => 0) {
      this.setState({
        completedTasks: [...completedTasks, todoTasks[index]],
      });
      this.setState({
        todoTasks: todoTasks.filter((e) => e.id !== todoId),
      });
    }
  };

  handleDeleteComplete = (todoId) => {
    const todoTasks = this.state.todoTasks;
    const completedTasks = this.state.completedTasks;

    let index = completedTasks.findIndex((item) => item.id === todoId);
    if ((index) => 0) {
      this.setState({
        todoTasks: [...todoTasks, completedTasks[index]],
      });
      this.setState({
        completedTasks: completedTasks.filter((e) => e.id !== todoId),
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
            tasks={this.state.todoTasks}
            onDelete={this.handleDeleteTodo}
          />
          <CompletedList
            tasks={this.state.completedTasks}
            onDelete={this.handleDeleteComplete}
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
