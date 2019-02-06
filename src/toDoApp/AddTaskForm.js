import React, { Component } from 'react';


class AddTaskForm extends Component {
    constructor(props){
        super(props);

        this.initialState = {
            title: '',
            text: '',
            completed: false,
        }

        this.state = this.initialState;

        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    submitForm = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { title, text } = this.state;

        return (
            <form className="commentForm" onSubmit={ this.submitForm } >
            <div className="form-group">   
            <label>Task</label>
            <input 
                type="text" 
                name="title" 
                className="form-control"
                value={ title } 
                onChange={ this.handleChange } />
            </div>        
            <div className="form-group">
            <label>Task notes</label>
            <input 
                type="text" 
                name="text" 
                className="form-control"
                value={ text } 
                onChange={ this.handleChange }/>
            </div>    
            <button
                type="submit" 
                className="btn btn-primary"
                value="Submit" 
                onClick={this.submitForm} > submit </button>
        </form>
        )
    }
}

export default AddTaskForm;