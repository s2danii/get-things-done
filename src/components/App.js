import React, {Component} from 'react';
import '../partials/App.scss';
import List from './List';
import AddItemForm from './AddItemForm';
import firebase from './firebase';
import Navigation from './Navigation';

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth()

class App extends Component {
  constructor () {
    super ();

    this.state = {
      user: '',
      userID: '',
      accountType: 'guest',
      date: '',
      isAddClicked: false,
      toDoList: [],
      newItem: {status: false},
    }

  }

  // ON UPDATE - COMPONENTDIDMOUNT
  componentDidMount () {

    // firebase call to retrieve data from database
    this.loadFirebase();

    // updates the date title to the current date
    let currentDate = new Date();
    const date = currentDate.toDateString()

    this.setState ({
      date
    });
  }

  // METHODS

  // function to handle google user authorization
  login = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        
        this.setState ({
          user,
          userID: user.uid,
          accountType: `users/${user.uid}`
        });

        this.loadFirebase();
      })
  }

  // function to handle google user authorization logout
  logout = () => {
    auth.signOut()
    .then(() => {
      this.setState({
        user: null,
        userID: '',
        accountType: `guest`
      });

      this.loadFirebase();
    });
  }

  // function to load data from firebase
  loadFirebase = () => {
    let dbRef = firebase.database().ref(this.state.accountType)      

    dbRef.on('value', (response) => {
      let data = response.val();
      let newToDoList = []

      for (let key in data) {
        newToDoList.push({...data[key], key: key});
      }

      this.setState ({
        toDoList: newToDoList
      })       
    });
  }

  // function to mark item as complete when checkbox is clicked
  handleCheck = (event, index) => {
    event.preventDefault();
    let toDoList = [...this.state.toDoList];
    let checkedItem = toDoList[index]
    checkedItem.status = !checkedItem.status;

    const dbRef = firebase.database().ref(`${this.state.accountType}/${checkedItem.key}`);
    dbRef.update(checkedItem);

    this.setState ({
      toDoList
    });
  }

  // function to open add new item modal
  addButton = (event) => {
    event.preventDefault();
    
    this.setState ({
      isAddClicked: !this.state.isAddClicked
    });
  }

  // function to save new to-do item added by user
  handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value

    let newItem = {...this.state.newItem}
    if (name === 'dueDate') {
      let newDate = new Date(value);
      value = newDate.toDateString();
    } 
    
    newItem[`${name}`] = value

    this.setState ({
      newItem,
    });
  }

  // function to submit new item to to-do list
  handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    const dbRef = firebase.database().ref(this.state.accountType);
    dbRef.push(this.state.newItem);

    this.setState ({
      newItem: {status: false},
      isAddClicked: !this.state.isAddClicked
    });
  }

  // function to edit list item
  handleEdit = (item) => {
    this.setState ({
      newItem: item
    })
  }
  
  // function to save edited item to to-do list
  handleEditSubmit = (event, key) => {
    event.preventDefault();
    const dbRef = firebase.database().ref(this.state.accountType).child(key);
    dbRef.update(this.state.newItem);

    this.setState ({
      newItem: {status: false},
    });
  }

  render () {
    return (
      <div className="App">
        <header>
          {/* Navigation */}
          <Navigation
          login={this.login}
          logout={this.logout}
          date={this.state.date}
          accountType={this.state.accountType}/>

          <h1>My Day</h1>
          <p>Hey{this.state.accountType === 'guest'? '': 
          ' ' + this.state.user.displayName}, ready to get some things done today?</p>

          <button className="newItemButton" onClick={this.addButton}>+ Add New</button>
        </header>

        {/* Add new item */}
        {this.state.isAddClicked && <AddItemForm
        closeButton={this.addButton}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}/>}        

        {/* List body */}
        <section className="listSection">
          <List 
          toDoList={this.state.toDoList}
          date={this.state.date}
          handleCheck={this.handleCheck}
          handleEdit={this.handleEdit}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleEditSubmit={this.handleEditSubmit}
          listLength={this.state.toDoList.length > 0}
          dbRef={firebase.database().ref(this.state.accountType)}/>
        </section>

        <button className="bottomAddButton" onClick={this.addButton}><i className="fas fa-plus"></i></button>
      </div>
    )
  }
}

export default App;
