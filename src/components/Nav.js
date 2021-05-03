import React, { Component } from 'react';
import { Navbar,Button,Form} from 'react-bootstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';

class Nav extends Component {

  handleUserLogout = () => {
    const { dispatch } = this.props;
    dispatch(setAuthedUser(null)) //return null instead of the authedUser
  }
  render() {
    const { authedUser } = this.props;
    return (      
    <Navbar bg="dark" variant="dark">    
      <Navbar.Brand ><h5>Would You Rather?</h5></Navbar.Brand>        
        <NavLink className="nav-item nav-link" to='/' >Home</NavLink>        
        <NavLink className="nav-item nav-link" to='/add' >New Question</NavLink>        
        <NavLink className="nav-item nav-link" to='/leaderboard'>Leaderboard</NavLink>        
      <Form inline>
        <Navbar.Text className='nav'>Signed in as: {authedUser}</Navbar.Text>
        <Button className="btn-sm btn-info margin-left-300" onClick={this.handleUserLogout}>Logout</Button>
      </Form>       
    </Navbar>
      
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }  
};

export default connect(mapStateToProps)(Nav);





