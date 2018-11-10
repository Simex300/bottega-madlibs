import React, { Component } from 'react';

import Header from './header';
import Card from './card';

 class Home extends Component {
  render() {
    return (
      <div className='home'>
        { Header("Madlabs", "React Bootstrap") }
        <Card />
      </div>
    );
  }
}

export default Home;