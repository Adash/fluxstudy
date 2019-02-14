import React, { Component } from 'react';
import AddTaskForm from './AddTaskForm';
import '../App.css';
// switch from CDC to local bootstrap file (like below) later
//import 'bootstrap/dist/css/bootstrap.css';



const TasksList = (props) => {
  const handleClick = (key) => { props.handleListClick(key) };
  const { handleRemove }= props;

  const tasks = props.notes.map((note, index)=>{
    const completed = (note.completed ? "line-through" : "");
    return (
      <li key={ index } 
          className="list-group-item" 
          style={{ textDecoration: completed }}
          >
          <span onClick={ ()=>handleClick(index)} >
            <span style={{ color: "darkgreen" }}> 
              { note.title } 
            </span> 
              -- 
            <span style={{ color: "seagreen" }}>
              { note.text }
            </span>
          </span>
            <button className="btn btn-danger" onClick={ () => handleRemove(index)  } >
            remove</button>
      </li>
    )
  });
  
  return <ul className="list-group" >{ tasks }</ul>
}

class ToDoAppController extends Component {
  constructor(props){
    super(props);

    this.state = {
      notes: [
        {title: 'first task', text: 'text of the first todo', completed: false,},
        {title: 'second task', text: 'text of the second todo', completed: true,}
      ],
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleListClick = this.handleListClick.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  handleSubmit = (value) => {
    this.setState({
      notes: [...this.state.notes, value],
    });
  }

  removeNote = (indexToRemove) => {
    const newNotes = this.state.notes.filter(
      (value, index) => index !== indexToRemove
    );
    console.log(newNotes)
    this.setState({ notes: newNotes });
  }

  handleListClick = (key)=> {
    const notesCopy = this.state.notes.slice();
    const completed = ( this.state.notes[key].completed ? false : true );
    notesCopy[key].completed = completed;

    this.setState({
      notes : notesCopy 
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
              <TasksList 
                notes={ this.state.notes } 
                handleListClick={ this.handleListClick } 
                handleRemove={ this.removeNote }
              />
          </div>
          <div className="col-6">
            <AddTaskForm handleSubmit={ this.handleSubmit } />
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoAppController;