import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';

class Login extends Component {
    
    state = {
        existingUser: ''            
    };

    onChange = (e) => {
        const existingUser = e.target.value;
        this.setState(() => ({
            existingUser
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {existingUser}= this.state
        const {dispatch} = this.props;
        dispatch(setAuthedUser(existingUser));
    }; 
    
    render() {        
        const { userIds } = this.props;
        const { existingUser } = this.state;
        return (
            <div className="login">                
                <div className="card text-center">
                        <div className="card-header">
                            <h5>Please Choose your Account</h5>                    
                        </div>
                        <div className="card-body">                                            
                            <Form onSubmit={this.handleSubmit}>            
                                <Form.Group controlId="exampleForm.ControlSelect1">                            
                                    <Form.Control as="select" onChange={this.onChange}>
                                        <option value="" >Select User</option>
                                        {userIds.map((usersId,index) =>(                     
                                            <option key={index} value={usersId}>
                                                {usersId}
                                            </option>                     
                                        ))}                     
                                    </Form.Control>
                                </Form.Group>                   
                                <input 
                                    className="form-control btn btn-dark"                   
                                    type  =   "submit" 
                                    value = 'login'
                                    disabled={existingUser === ''}                                     
                                />               
                            </Form>         
                        </div>
                </div>
            </div>           
        )
    }
};


//users needed from the store  
function mapStateToProps({ users }) {
    return {
      userIds: Object.keys(users),  //[] select a name from the list of existing users   
    }
};
 
export default connect(mapStateToProps)(Login);
