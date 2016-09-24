import React from 'react';

import Footer from './Footer';
import Navbar from './Navbar';

class App extends React.Component {
    render() {
        
    return (
      <div className='app-container'>
	    <Navbar history={this.props.history} />
        {this.props.children}
      </div>
    );
  }
}

export default App;