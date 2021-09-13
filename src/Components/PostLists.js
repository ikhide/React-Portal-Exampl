import React, { Component } from "react";
import axios from "axios";

export default class PostLists extends Component {
  state = {
    todos: [],
    newTodo: "",
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      this.setState({
        todos: response.data,
      });
    });
  }

  handleChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = () => {
    if (this.state.newTodo.trim() === "") {
      alert("please enter a todo");
    } else {
      const id = this.state.todos.length + 1;
      const newTodo = {
        completed: false,
        id,
        title: this.state.newTodo,
        userId: 1,
      };
      const todoList = this.state.todos;
      todoList.push(newTodo);
      this.setState({ todos: todoList, newTodo: "" });
    }
  };

  toggleComplete = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.map((todo) => {
          if (todo.id === id) todo.completed = !todo.completed;

          return todo;
        }),
      ],
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  render() {
    console.log(this.state);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "50vw",
            height: "20vh",
            backgroundColor: "blue",
            display: "flex",
            flexDirection: "column",
            padding: "5%",
            alignItems: "center",
          }}
        >
          <h1>Todo List</h1>
          <div>
            <input
              value={this.state.newTodo}
              onChange={(e) => this.handleChange(e)}
            />
            <button style={{ backgroundColor: "white" }} onClick={this.addTodo}>
              Add todo
            </button>
          </div>
        </div>
        {this.state.todos.reverse().map((todo) => {
          return (
            <div
              style={{ width: "80%", display: "flex", alignItems: "center" }}
            >
              <p
                style={{
                  textDecoration: todo.completed ? "line-through" : "",
                  width: "70%",
                }}
                key={todo.id}
              >
                {todo.title}
              </p>
              <button
                onClick={() => this.toggleComplete(todo.id)}
                style={{
                  height: "70%",
                  width: "80px",
                  backgroundColor: todo.completed ? "blue" : "white",
                  color: todo.completed ? "white" : "blue",
                  border: "none",
                }}
              >
                {todo.completed ? "Undo" : "Done"}
              </button>
              <button
                onClick={() => this.deleteTodo(todo.id)}
                style={{
                  height: "70%",
                  width: "80px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  marginLeft: "2px",
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
