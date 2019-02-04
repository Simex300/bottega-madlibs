import React, { Component } from 'react';

import Header from './header';
import Card from './card';

 class Home extends Component {
  render() {
    return (
      <div className='home'>
        { Header("Bottega Madlibs", "Fill out the fields below and click the generate button to se the Mad Lib story") }
        <Card />
      </div>
    );
  }
}

export default Home;