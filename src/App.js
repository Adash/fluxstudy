import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ToDoAppController from './toDoApp/ToDoAppController';
import RenderPropsController from './renderProps/RenderPropsController';

import './App.css';

const Index = ()=> (
  <h1> index </h1>
)

const Blog = () => {
  return (
    <div>
      <h1>Welcome to Blog</h1>
    </div>
  )
}
const About = () => {
  return (
    <div>
      <h1>About Us</h1>
    </div>
  )
}

class App extends Component {  
  render() {
    return (
      <div className='container'>
        <AppRouter/>
      </div>
    )
  }
}

const AppRouter = ()=> (
  <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/" >AdasQ</a>
        <ul className="navbar-nav mr-auto" >
          <li className="nav-item active" >
            <div className="nav-link" ><Link to="/">Home</Link></div>
          </li>
          <li className="nav-item">
            <div className="nav-link"><Link to="/todoapp/">To Do App</Link></div>
          </li>
          <li className="nav-item">
            <div className="nav-link"><Link to="/blog/">Blog</Link></div>
          </li>
          <li className="nav-item">
            <div className="nav-link"><Link to="/renderprops/">Render Props</Link></div>
          </li>
          <li className="nav-item">
          <div className="nav-link"><Link to="/about/">About</Link></div>
          </li>
        </ul>
      </nav>
     
      <Route path="/" exact component={Index} />
      <Route path="/todoapp/" component={ToDoAppController} />
      <Route path="/renderProps/" component={RenderPropsController} />
      <Route path="/blog/" component={Blog} />
      <Route path="/about/" component={About} />
    </div>
  </Router>
)

export default App;
