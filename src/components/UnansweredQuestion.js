import React, { Component } from 'react';
import { Button, Card, Form } from "react-bootstrap";
import { handleAnsQues } from '../actions/questions';
import {Redirect} from "react-router-dom";
import { connect } from 'react-redux';


class UnansweredQuestion extends Component {
    state = {
        selectedAns: '',
       toHome:false
    };

    handleChange = (e) => {
        const selectedAns = e.target.value;
        this.setState(() => ({
            selectedAns
        }));
    };

    handleSubmit(e, id) {
        e.preventDefault();
        const {dispatch} = this.props;
        const {selectedAns} = this.state;

        dispatch(handleAnsQues(id, selectedAns));

        this.setState(() => ({
            selectedAns: '',
            toHome:true
           
        }));
    }

    render() {
        const { toHome } = this.state;
        const { id, question } = this.props;
        
        const redirectTo = `/`;
        if (toHome === true) {
            return <Redirect to={redirectTo}/>;
        };            
                
        return (       
                <Card style={{ width: '18rem' }}>
                    <Card.Header>Asked by <h5>{question.name}</h5></Card.Header>
                    <Card.Img variant="top" src={question.avatar} alt={`avatar of ${question.name}`} />
                        <Card.Body>
                            <Card.Title>Would You Rather?..</Card.Title>
                            <Form onSubmit={(event)=>this.handleSubmit(event,id)}>
                                <div className="mb-3" >                                
                                    <Form.Check
                                        custom                                    
                                        type={"radio"}
                                        id="optionOne"                            
                                        label={question.optionOne.text}
                                        value="optionOne"
                                        onChange={this.handleChange}
                                    />                         
                                    <Form.Check
                                        custom                                    
                                        type={"radio"}
                                        id="optionTwo"                            
                                        label={question.optionTwo.text}
                                        value="optionTwo"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <Button variant="primary" type="submit" disabled={!this.state.selectedAns}>
                                    Submit
                                </Button>
                            </Form>
    
                        </Card.Body>
                </Card>            
                
        );
    }
}


export default connect()(UnansweredQuestion); 