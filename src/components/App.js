import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';
import Nav from './Nav';
import Login from './Login';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import Question from './Question';
import NotFoundPage from './NotFoundPage';

class App extends Component { 
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  };

  render() {        
    return (  
      <Router>       
        <Fragment>
          <LoadingBar/> 
          <div className='container'>
            {
              this.props.authedUser ?               
                <div>
                  <Nav />
                  <Switch>
                  <Route path ='/' exact component={Dashboard} />
                  <Route path ='/add' component={NewQuestion} />
                  <Route path='/leaderboard' component={Leaderboard} />                  
                  <Route path='/questions/:id' component={Question}/>  
                  <Route path ='/404page' component={NotFoundPage}/>                  
                  </Switch>                  
                </div>
              :<Login/>
            }            
          </div>
        </Fragment>  
      </Router>        
    );
  }
}

function mapStateToProps({ authedUser }) {      
  return {
    authedUser    
  }
};

export default connect(mapStateToProps)(App) //read state from the store and // apply dipatch on actions
