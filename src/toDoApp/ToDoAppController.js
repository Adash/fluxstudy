import React, { Component } from 'react';
import AddTaskForm from './AddTaskForm';
import '../App.css';
// switch from CDC to local bootstrap file (like below) later
//import 'bootstrap/dist/css/bootstrap.css';


const TasksList = (props) => {
  const handleClick = (key) => { props.handleListClick(key) };
  //const { handleRemove }= props;

  const tasks = props.notes.map((note, index)=>{
    const completed = (note.completed ? "line-through" : "");
    const active = (note.active ? "active" : "");
    return (
      <li key={ index } 
          className={ "list-group-item " + " " +  active} 
          style={{ textDecoration: completed }}
          onMouseOver={ ()=> props.mouseOver( index ) }
          onMouseOut={ ()=> props.mouseLeave( index )  }
          onClick={ ()=>handleClick(index)}
          >
          <span  >
            <span style={{ color: "darkgreen" }}> 
              { note.title } 
            </span> 
              -- 
            <span style={{ color: "darkgray" }}>
              { note.text }
            </span>
          </span>
            <button className="btn btn-danger" onClick={ () => props.handleRemove(index)  } >
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
        {title: 'first task', text: 'text of the first todo', completed: false, active: false,},
        {title: 'second task', text: 'text of the second todo', completed: true, active: false,}
      ],
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleListClick = this.handleListClick.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.makeActive = this.makeActive.bind(this);
    this.removeActive = this.removeActive.bind(this);
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

  makeActive = (key) => {
    const notesCopy = this.state.notes.slice();
    notesCopy[key].active = true;

     this.setState({
       notes : notesCopy 
     });
  }

  removeActive = (key) => {
    const notesCopy = this.state.notes.slice();
    notesCopy[key].active = false;

     this.setState({
       notes : notesCopy 
     });
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
                mouseOver={ this.makeActive }
                mouseLeave={ this.removeActive }
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