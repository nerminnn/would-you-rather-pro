import {
    RECIEVE_USERS,
    USER_ADD_QUES,
    USER_ANS_QUES
} from '../actions/users';

export default function users(state = {}, action) {
    switch (action.type) {
        case RECIEVE_USERS:
            return {
                ...state,
               ...action.users 
            }
        case USER_ADD_QUES:           
            return {       
                ...state, 
                [action.authedUser]: {
                ...state[action.authedUser],
                questions: [...state[action.authedUser].questions, action.uid],
                }
            }
        case USER_ANS_QUES:            
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]:action.answer
                    }
                }
            }        

        default:
            return state;        
    }    
};