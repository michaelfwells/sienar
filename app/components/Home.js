import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
    render() {
        var style={margin: 60, fontSize: 40};
        var viewStyle={paddingTop: 10};
        return (
          <div style={viewStyle}>
         <Link to='/rebel'>
            <div style={style}>
            <img src={'/rebelLogo.png'}/>
            </div>
            
        </Link>
        <div style={style}>
        Choose your side
        </div>
        <Link to='/empire'>
            <div style={style}>
            <img src={'/imperialLogo.png'}/>
            </div>
            
        </Link>
      </div>
    );
  }
}

export default Home;