import React from 'react'
import Header from './Header'
import InputTodo from './InputTodo'
import TodosList from './TodosList'
import uuid from 'uuid/v4';
import MetaTags from 'react-meta-tags';

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "Setup development environment",
        completed: true
      },
      {
        id: uuid(),
        title: "Develop website and add content",
        completed: false
      },
      {
        id: uuid(),
        title: "Deploy to live server",
        completed: false
      },
      {
        id: uuid(),
        title: "Working from home",
        completed: true
      }
    ]
  };

  handleChange = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };

  addTodoItem = title => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <div className="wrapper">
        <MetaTags>
          <title>Simple Todo App</title>
          <meta name="description" content="My React App" />
          <meta property="og:title" content="My Simple Todo App" />
          <meta property="og:image" content="./cover.png" />
        </MetaTags>
        <div className="container">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
          />
        </div>
      </div>
    );
  }
}
export default TodoContainer