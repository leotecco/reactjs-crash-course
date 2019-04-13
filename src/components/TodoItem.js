import React, { Component } from 'react';
import PropTypes from 'prop-types';

const btnStyle = {
  width: '20px',
  height: '20px',
  lineHeight: '20px',
  textAlign: 'center',
  background: '#ff0000',
  color: '#ffffff',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
};

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
  };

  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px dotted #cccccc',
      textDecoration: this.props.todo.completed
        ? 'line-through'
        : 'none'
    }
  }

  render() {
    const { id } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
          {this.props.todo.title}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
        </p>
      </div>
    )
  }
}