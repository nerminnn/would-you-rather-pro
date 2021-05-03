import { getInitialData } from './../utils/api';
import { recieveQuestions } from './questions';
import { recieveUsers } from './users';
import { showLoading, hideLoading } from 'react-redux-loading';

 
export function handleInitialData() {    
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData() 
            .then(({ users, questions }) => {
                dispatch(recieveUsers(users))
                dispatch(recieveQuestions(questions))                
                dispatch(hideLoading())           
            })
    }
}

