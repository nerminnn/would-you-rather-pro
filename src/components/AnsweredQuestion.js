import React from 'react';
import { Card, ProgressBar,Badge} from "react-bootstrap";

const AnsweredQuestion = (props) => {
    const { question, authedUser } = props //get the props
    
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes     = optionOneVotes + optionTwoVotes;
    const optionOnePerce = Math.round((optionOneVotes / totalVotes) * 100);
    const optionTwoPerce = Math.round((optionTwoVotes / totalVotes) * 100);
    
    const chosenOne = question.optionOne.votes.includes(authedUser);
    const chosenTwo = question.optionTwo.votes.includes(authedUser);
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header>Asked by... <h5>{question.name}</h5></Card.Header>
            <Card.Img variant="top" src={question.avatar} alt={`avatar of ${question.name}`} />
            <Card.Body>
                <Card.Title>Would You Rather?..</Card.Title>
                <div>
                    <Card.Text>
                        {question.optionOne.text} <b> ({optionOneVotes} votes)</b>
                        {chosenOne && (<Badge variant="primary">You voted</Badge>)}
                    </Card.Text>
                    <ProgressBar striped variant="success" now={optionOnePerce} label={`${optionOnePerce}%`} />
                </div>
                <div>
                    <Card.Text>
                        {question.optionTwo.text}<b>({optionTwoVotes} votes)</b>
                        {chosenTwo && (<Badge variant="primary">You voted</Badge>)}
                    </Card.Text>
                    <ProgressBar striped variant="success" now={optionTwoPerce} label={`${optionTwoPerce}%`} />
                </div>
            </Card.Body>
        </Card>
    );
};


export default AnsweredQuestion;
