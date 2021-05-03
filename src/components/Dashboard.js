import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionList from './QuestionList';
import { Tab, Tabs, ListGroup } from 'react-bootstrap';

class Dashboard extends Component {    

    render() {
        const { answeredQuestions, unansweredQuestions } = this.props;        
        return (
            <Tabs defaultActiveKey="unanswered" id="uncontrolled-tab-example">
                <Tab eventKey="unanswered" title="Unanswered Questions">
                    <ListGroup >
                    <ul>
                        {unansweredQuestions.map(id => (                 
                            <li key={id}>                        
                                <QuestionList id={id} />                        
                            </li>                             
                        ))}
                    </ul>
                    </ListGroup>
                </Tab>
                <Tab eventKey="answered" title="Answered Questions">
                    <ListGroup >
                    <ul>
                        {answeredQuestions.map(id => (                    
                            <li key={id}>    
                                <QuestionList id={id} />                        
                            </li>
                        ))}                      
                    </ul> 
                    </ListGroup>                    
                </Tab>
            </Tabs>

        );
    }
}

function mapStateToProps({ questions,users,authedUser }) {     
    let currentUser = users[authedUser];
    const answeredQuestions = Object.keys(currentUser.answers) //ids
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
    
    const unansweredQuestions = Object.keys(questions).filter(qid => !answeredQuestions.includes(qid)) //ids
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);        
    return {        
        answeredQuestions, 
        unansweredQuestions,        
    }    
}

export default connect(mapStateToProps)(Dashboard);


