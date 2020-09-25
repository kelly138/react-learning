import React, {Component, Fragment} from 'react'
import './index.css'
import ToDoItem from './ToDoItem'

class ToDoList  extends Component {
  constructor (...props) {
    super(...props)
    this.state = {
      inputValue: '',
      list: []
    }

    // this.handleInputChange = this.handleInputChange.bind(this)
    // this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  UNSAFE_componentWillMount () {
    console.log('componentWillMount')
  }


  render () {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">请输入内容</label>
          <input
            id="insertArea"
            className='input'
            value={this.state.inputValue}
            onChange={(e) => this.handleInputChange(e)}
          />
          <button onClick={() => this.handleBtnClick()}>提交</button>
        </div>
        <ul ref={(ul) => {this.ul = ul}}>
          {
            this.getToDoItem()
          }
        </ul>
      </Fragment>
    )
  }

  getToDoItem () {
    return  this.state.list.map((item, index) => (
      <ToDoItem
        key={index}
        content={item}
        index={index}
        deleteItem={this.handleItemDelete}
      />
    ))
  }

  handleInputChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleBtnClick () {
    this.setState(
      (prevState) => ({
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
      }),
      () => {
        console.log(this.ul.querySelectorAll('div').length)
      }
    )
  }

  handleItemDelete (index) {
    this.setState((prevState) => {
      const list = [...this.state.list]
      list.splice(index, 1)
      return {list}
    })

  }


}

export default ToDoList
