import React, { Component } from 'react';
import dataSource from './dataSource.json'

class DataPresenter extends Component {
  render(){
    const { data } = this.props;
    return(
      <div className='card' style={{ width: 180 }}>
        <div className='card-body'>
          <h5 className='card-title' > { data.name } </h5>
          <p className='card-text'> { data.age } </p>
          <p className='card-text'> { data.location } </p>
        </div>
      </div>
    );
  }
}

class DataFetcher extends Component {

  constructor(props){
    super(props);

    this.state = {
      currentUser: dataSource,
      number: (Math.floor((Math.random() * 4) + 1))
    }
  }

  render(){
    const fetchedUser = this.state.currentUser[this.state.number];
    return (
      <div className='container'>
        <div className="container">
         { this.props.render(fetchedUser) }
        </div>
      </div>
    )
  }

}


class RenderPropsController extends Component {

  render(){
    
    return (
      <div className="container">
        <p>I'm a Render Props Controller</p>
        <DataFetcher render={ data=> (
          <DataPresenter data={data} />
          //console.log(data) 
        ) } />
      </div>
    )
  }
}

export default RenderPropsController;