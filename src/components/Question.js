import React, { Component } from 'react';
import AnsweredQuestion from './AnsweredQuestion';
import UnansweredQuestion from './UnansweredQuestion';
import { connect } from 'react-redux';
import { formatQuestion } from './../utils/helper';
import { Redirect } from 'react-router-dom';


class Question extends Component {
  
  render() {
    const { id, question, authedUser } = this.props;
    if (question === false || question === undefined) {
      return <Redirect to ='/404page'/> 
    };
    
    const answered = question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser)   
    
    return (
      <div>
        {
          answered ? <AnsweredQuestion id={id}            
            authedUser={authedUser}
            question={question}
            />
          :<UnansweredQuestion id={id}              
              question={question}
              authedUser={authedUser}
            />
        } 
            
      </div>
    );
  }
}

function mapStateToProps({ questions,users,authedUser },props) {    
  const {id} = props.match.params;
  const question = questions[id]  
    
  return {
    question: question && formatQuestion(question, users[question.author], authedUser),
    id,
    authedUser,  
    
  }
};


export default connect(mapStateToProps)(Question);
