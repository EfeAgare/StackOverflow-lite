# StackOverflow-lite
[![Build Status](https://travis-ci.com/EfeAgare/StackOverflow-lite.svg?branch=develop)](https://travis-ci.com/EfeAgare/StackOverflow-lite)
[![Coverage Status](https://coveralls.io/repos/github/EfeAgare/StackOverflow-lite/badge.svg)](https://coveralls.io/github/EfeAgare/StackOverflow-lite)
[![Maintainability](https://api.codeclimate.com/v1/badges/46560a711baed33b0147/maintainability)](https://codeclimate.com/github/EfeAgare/StackOverflow-lite/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/46560a711baed33b0147/test_coverage)](https://codeclimate.com/github/EfeAgare/StackOverflow-lite/test_coverage)

StackOverflow-lite app is an application platform where people can ask questions ad provide answers to questions.

## How it works 
* Users can:
    * Get all questions
    * Get a question
    * Post a question
    * Post an answer to a question
    
## Technologies
  * Nodejs(ES6)
  * Git
  * NPM
  * Express
  * Babel
## Linting Library
  * Eslint
  
## Installation
  Ensure you have the technologies installed then you can clone this repository in your local machine. Afterwards, run <code> npm install </code>  and run  <code> npm run start:dev </code>  for a quick start. Or you may build first, using <code> npm run build </code> then run <code> npm start </code>.
If you only want to access the completed work, you will find the link to the hosted work at the bottom of this readme, you don't have to clone this repository!

## Test
  Mocha is the testing framework together with chai assertion library
  * You can run test after installation using <code> npm run test </code>   

<h3>ENDPOINTS</h3>
<hr>
<table>
  <tr>
      <th>HTTP Request</th>
      <th>End Point</th>
      <th>Functionality</th>
  </tr>
  <tr>
      <td>GET</td>
      <td>/api/v1/questions</td>
      <td>Fetch all questions</td>
  </tr>
  <tr>
      <td>GET</td>
      <td>/api/v1/questions/:questionId</td>
      <td>Fetch a specific question</td>
  </tr>
   <tr>
      <td>POST</td>
      <td>/api/v1/questions</td>
      <td>Add a question</td>
  </tr>
  <tr>
      <td>POST</td>
      <td>/api/v1/questions/:questionId/answers</td>
      <td>Add an answer</td>
  </tr>
   
</table>
<br/>
<hr>

You can access the app here https://stackliteoverflow.herokuapp.com/api/v1/
