import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';


class Leaderboard extends Component {
    render() {
        const { users, totalScore } = this.props;               
        return (
            <div>
                {users.map((user,index) => (                                 
                    <Card style={{ width: '18rem' }} key={index}>
                        <Card.Header>Asked by... <h5>{user.name}</h5></Card.Header>                    
                        <Card.Img variant="top" src={user.avatarURL} alt={`avatar of ${user.name}`} />
                        <Card.Body>                        
                            <Card.Text>
                                <b>Total Score : </b> ({totalScore(user)})
                            </Card.Text>
                            <Card.Text>
                                <b>Answered : </b> {`(${Object.keys(user.answers).length}) answers`}
                            </Card.Text>
                            <Card.Text>
                                <b>Created : </b> {`(${ user.questions.length }) questions`}
                             </Card.Text>
                        </Card.Body>                       
                    </Card>                    
                ))}      
          </div>
        );
    }
}


function mapStateToProps({ users }) {
    const totalScore = user =>
        Object.keys(user.answers).length + user.questions.length; //total
        return {
            users: Object.values(users).sort((a, b) => totalScore(b) - totalScore(a)),
            totalScore
        }
    
    
}
export default connect(mapStateToProps)(Leaderboard);