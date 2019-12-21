import React, { Component } from 'react';
import './App.scss';

import Homepage from '../../pages/Homepage/Homepage/Homepage';
import Button from '../Button/Button';




class App extends Component  {

  // submit btn function
  handleSubmit = (e) => {
    console.log('btn has been clicked');
  }



  render() {
    return (
      <div className="main-container">
        Hello world
        <Homepage />
        <Button type="add-to-cart" handleSubmit={this.handleSubmit} />
      </div>
    );
  }

}

// function App() {
//   return (
//     <div className="main-container">
//       Hello world
//       <Homepage />
//       <Button type={submit} handleSubmit={this.handleSubmit} />
//     </div>
//   );
// }

export default App;
