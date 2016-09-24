import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.previousState = null;
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    NavbarStore.listen(this.onChange);
    NavbarActions.getCharacterCount();

    let socket = io.connect();

    socket.on('onlineUsers', (data) => {
      NavbarActions.updateOnlineUsers(data);
    });

    $(document).ajaxStart(() => {
      NavbarActions.updateAjaxAnimation('fadeIn');
    });

    $(document).ajaxComplete(() => {
      setTimeout(() => {
        NavbarActions.updateAjaxAnimation('fadeOut');
      }, 750);
    });
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.previousState = this.state;
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    let searchQuery = this.state.searchQuery.trim();

    if (searchQuery) {
      NavbarActions.findCharacter({
        searchQuery: searchQuery,
        searchForm: this.refs.searchForm,
        history: this.props.history
      });
    }
  }

 
  handleClick() {
      this.setState({open: !this.state.open});
  }
    
  render() {


      return (

      <nav className='navbar navbar-default navbar-static-top'>
        <div className='navbar-header' >
            <div className='navbar-border'></div>
                <Link to='/' className='navbar-brand'>
            
            <img src={"/logo.png"} className='navbar-img' />

          </Link>
                
                <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' onClick={this.handleClick}>
                    <img src={'/menuToggle.png'} />
                </button>
                <div id='menu' className={this.state.open ? 'open' : ''}>
                                <div style={{ height: '100%', width: '100%', color: 'white', fontSize: 42, textAlign: 'right'}}>
                <ul style={{paddingRight: 30}}>
<li style={{fontSize: 60}} onClick={this.handleClick}>&times;</li>
                <li>New Fleet</li>
                <li><img src={'/rebelLogo.png'} /><img src={'/imperialLogo.png'} /></li>
                <li>Saved Fleets</li>
                <li>My Collection</li>
                <li>Library</li>
                <li>Settings</li>
                <li onClick={this.handleClick}><Link to='/add'>Add Ship</Link></li>
                </ul>
                </div>
                </div>
          
          
        </div>
        
      </nav>

    );
  }
}

export default Navbar;