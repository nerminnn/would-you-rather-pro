import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleAddQuestions } from '../actions/questions';
import { Redirect } from 'react-router-dom';


class NewQuestion extends Component {

    state = {
        firstQues: '',
        secQues: '',
        toHome: false
    };
    
    handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    };

    handleSumbit = e => {
        e.preventDefault();
        const { firstQues, secQues } = this.state;
        const { dispatch } = this.props;
        if (firstQues && secQues) {
            dispatch(handleAddQuestions(firstQues, secQues))
            this.setState({ toHome: true })
        }
        else {
            alert("Would You Rather?... Write Your Questions Down There")
        }
    };

    render() {
        const { toHome } = this.state;
        if (toHome === true) {
            return <Redirect to='/' />
        }
        return (
            <div>            
             <Form onSubmit={this.handleSumbit} >
              <Form.Group controlId="addOptionOne">
              <h2 style={{textAlign: "center"}}>Would You Rather?...</h2>
                <Form.Label> Option(1)</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter option one" 
                    name= 'firstQues'
                    onChange={this.handleChange}
                />               
              </Form.Group>
          
              <Form.Group controlId="addOptionTwo">
              <Form.Label>Option(2)</Form.Label>
              <Form.Control
                    type="text"
                    placeholder="Enter option two"
                    name= 'secQues'
                    onChange={this.handleChange}               
              />
              </Form.Group>            
              <Button variant="form-control btn btn-dark"
                type="submit">                  
                Submit
              </Button>
             </Form>                   
            </div>
        );
    }
};

export default connect()(NewQuestion); // to get access to the store and dispatch 

