import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { formatQuestion } from './../utils/helper';


class QuestionList extends Component {  
  render() {       
    const { question, id } = this.props;       
    const { name, avatar, optionOne, optionTwo } = question;
         
    return (
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={avatar} alt={`avatar of ${name}`} />
        <Card.Body>
          <Card.Title>{`${name} asks you!`}</Card.Title>
          <Card.Text>
            {`${optionOne.text} OR ${optionTwo.text}`}               
          </Card.Text>
          <Link to={`questions/${id}`} className='center'> 
            <Button variant="primary" >Check Out</Button>
          </Link>       
        </Card.Body>
      </Card>
      );
    }
} 

function mapStateToProps({ authedUser, users, questions }, {id}) {
    const question = questions[id]  
    return {            
      question: question && formatQuestion(question, users[question.author], authedUser),        
    }
};
export default connect(mapStateToProps)(QuestionList);


//Each polling question resides in the correct category. For example, if a question hasn’t been answered by the current user, it should be in the “Unanswered” category.