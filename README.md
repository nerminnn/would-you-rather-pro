# Would You Rather Project

This is the starter code for the final assessment project for Udacity's React & Redux course.

The `_DATA.js` file represents a fake database and methods in `api.js` to interact with database and `helper.js` contains a function who is responsible for formating data.

## Build Tools

* CSS
* JavaScript
* React
* Redux
* Redux-thunk
* React-router-dom
* React-bootstrap
* React-redux-loading

## How to Run

1. Move to the project folder
```bash
cd <project directory>
```
2. Clone the repo

* git clone
```bash
 https://github.com/nerminnn/reactnd-project-would-you-rather-starter.git
```

3. Run the project locally
* npm
```bash
  npm install 
  npm start 
```
## Usage
- At the root of the App, you have 4 main views
### Login View
* Once the user logs in with an existing user, the home page is shown
* The application allows the user to log out and log back in to submit new question, vote, and view the leaderboard.
* Whenever the user types something in the address bar, the user is asked to log in before the requested page is shown.
### Home View
* The user can alternate between viewing answered and unanswered questions at the home page.
* The unanswered questions are shown by default.
* The name of the logged in user is visible on the navbar.
* The user can navigate to the leaderboard, new question and logout to return to the login view.
### New Question
* The form is available at `/add.`
* The form lets you create two options.
* Upon submitting the form, a new poll is created and the user is taken to the home page.
* The new polling question appears in the correct category on the home page(Unanswered Questions).
### Leaderboard 
* The Leaderboard is available at `/leaderboard`.
* Each user on the leaderboard contains the following:
    * The number of questions the user asked.
    * The number of questions the user answered.
    * The total of both activity.

### Note:
The user has another 2 views related to her/his choice of the questions, 

* Answered question, she/he will be able to see the results of the voting
* Unanswered question, she/he will be able to chose the option and sumbit the answer, the question will transfer ffrom the unanswered to answered question section.

if any of the new create question that doesnt exit in the data base once you requested its URl the 404page not found will shown. 


## Data
There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|


