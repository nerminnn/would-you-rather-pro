import { RECIEVE_QUESTIONS, ADD_QUESTIONS,ANS_QUES } from '../actions/questions';

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECIEVE_QUESTIONS:
            return {
                ...state,
               ...action.questions 
            }
        case ADD_QUESTIONS:                        
            return {
                ...state,
                [action.question.id]: action.question         
            }
        case ANS_QUES:            
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }                 

            }
        default:
            return state
    }    
};