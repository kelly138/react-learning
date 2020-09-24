import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ToDoItem extends Component {
  constructor (props) {
    super(props)
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  render () {
    const {content, test} = this.props
    return (
      <div onClick={this.handleItemClick}>
        {test} - {content}
      </div>
    )
  }

  handleItemClick () {
    const {deleteItem, index} = this.props
    deleteItem(index)
  }
}

ToDoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

ToDoItem.defaultProps = {
  test: 'hello'
}

export default ToDoItem
