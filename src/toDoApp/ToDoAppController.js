import React, { Component } from 'react';
import AddTaskForm from './AddTaskForm';
import inData from './notes.json';

import './ToDoApp.css';

const TasksList = (props) => {
  const handleClick = (key) => { props.handleListClick(key) };
  //const { handleRemove }= props;

  const tasks = props.notes.map((note, index)=>{
    const completed = (note.completed ? "line-through" : "");
    const active = (note.active ? "active" : "");
    return (
    <div key={ index } className="listElementContainer">
      <div 
          className={ "list-group-item " +  active} 
          style={{ textDecoration: completed }}
          onMouseOver={ ()=> props.mouseOver( index ) }
          onMouseOut={ ()=> props.mouseLeave( index )  }
          onClick={ ()=>handleClick(index)}
          >
          <span  >
            <span style={{ color: "darkgreen" }}> 
              { note.title } 
            </span> 
            <span> -- </span>
            <span style={{ color: "darkgray" }}>
              { note.text }
            </span>
          </span>    
      </div>
      <span 
        className="btn btn-danger listElementButton" 
        onClick={ () => props.handleRemove(index)} 
      >remove</span> 
    </div>

    )
  });
  
  return <div className='listContainer'>{ tasks }</div>
}

class ToDoAppController extends Component {
  constructor(props){
    super(props);

    this.state = {
      notes: inData.notes,
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
      <div className="toDoAppContainer">
          <div className="noteList">
            <TasksList 
              notes={ this.state.notes } 
              handleListClick={ this.handleListClick } 
              handleRemove={ this.removeNote }
              mouseOver={ this.makeActive }
              mouseLeave={ this.removeActive }
            />
          </div>
          <div className="noteForm formContainer">
            <AddTaskForm handleSubmit={ this.handleSubmit } />
        </div>
      </div>
    );
  }
}

export default ToDoAppController;