import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => {
  
  
  // self.TodoClassName = () => {return "col-1"}

  // <button type="button" class="btn btn-primary">Primary</button>
  const customClass = () => {
    let custom = 'col-1 btn '+( completed? 'btn-outline-success' : 'btn-outline-primary')
    return ( custom )
  }
  return (
  <li
      className = {customClass()}
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
)
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
