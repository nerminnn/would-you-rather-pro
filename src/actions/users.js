export const RECIEVE_USERS = 'RECIEVE_USERS';
export const USER_ADD_QUES = 'USER_ADD_QUES';
export const USER_ANS_QUES = 'USER_ANS_QUES';

//pass it to the initial data
export function recieveUsers(users) {
    return {
        type: RECIEVE_USERS,
        users
    }
};

export function userAddQues(authedUser,uid) {
    return {
        type: USER_ADD_QUES,
        authedUser,
        uid
    }
};

export function userAnsQues(authedUser,qid,answer) {
    return {
        type: USER_ANS_QUES,
        authedUser,
        qid,
        answer
    }
};
