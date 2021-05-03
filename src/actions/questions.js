import { showLoading, hideLoading } from 'react-redux-loading';
import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { userAddQues,userAnsQues } from './users';

export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS';
export const ADD_QUESTIONS = 'ADD_QUESTIONS';
export const ANS_QUES = 'ANS_QUES'

//pass it to the initial data
export function recieveQuestions(questions) {
    return {
        type: RECIEVE_QUESTIONS,
        questions
    }
};

export function addQuestions(question) {
    return {
        type: ADD_QUESTIONS,
        question
    }    
};

function answerQuestion( authedUser, qid, answer ) {
    return {
      type: ANS_QUES,
      authedUser,
      qid,
      answer    
    }
};

export function handleAddQuestions(optionOneText, optionTwoText){
    return (dispatch, getState) => { /// handling async func
        const { authedUser } = getState();        
        dispatch(showLoading())
        return saveQuestion({
            author: authedUser,
            optionOneText,
            optionTwoText,            
        }).then(question => {            
            dispatch(addQuestions(question))
            dispatch(userAddQues( authedUser, question.id ))
            dispatch(hideLoading())
        })                
    }
};


export function handleAnsQues(qid, answer){
    return (dispatch, getState) => { 
        const { authedUser } = getState();        
        dispatch(showLoading())
        return saveQuestionAnswer({
            authedUser,
            qid,
            answer,            
        }).then(() => {            
            dispatch(answerQuestion( authedUser,qid, answer))
            dispatch(userAnsQues(authedUser,qid, answer))
            dispatch(hideLoading())
        })                
    }
};

            