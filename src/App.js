import Second from './davaleba-2/Second'
import './App.css';
import Child from './Child/Child';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     showUserslist: true
    };
    }
  handleList = () => {
    this.setState(  prevState => ({showUserslist: !prevState.showUserslist})  );

    }
  render() {
    return (
      <div className='wrapper'>

        {/* pirveli davalebaa */}

        {/* {this.state.showUserslist && <Child />}
        <button className='toggler' onClick={this.handleList}> Toggle users </button> */}

        {/* pirveli davalebis dasasruli */}


        <Second />



        </div>
    )
  }
}



