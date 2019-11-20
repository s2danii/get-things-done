import React, {Component} from 'react';
import '../partials/App.scss';
import List from './List';


class App extends Component {
  constructor () {
    super ();

    this.state = {
      date: '',
      toDoItems: [{title: 'finish tech test', description: 'to do app', status: false, dueDate: 'march 4'}, {title: 'groceries', description: 'lorem', status: false, dueDate: 'march 10'}],

    }

  }

  componentDidMount () {

    // updates the date title to the current date
    let currentDate = new Date();
    const date = currentDate.toDateString()

    this.setState ({
      date
    })
  }

  // function to mark item as complete when checkbox is clicked
  handleCheck = (event, index) => {
    event.preventDefault();
    let toDoItems = this.state.toDoItems
    toDoItems[index].status = !toDoItems[index].status

    this.setState ({
      toDoItems
    })
  }

  render () {
    return (
      <div>
        <h1>Today</h1>
        <h2>{this.state.date}</h2>
        <List 
        toDoItems={this.state.toDoItems}
        handleCheck={this.handleCheck}/>
      </div>
    )
  }

}

export default App;
