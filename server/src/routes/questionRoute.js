import express from 'express';
import questionController from '../controllers/questionController';
const questionRoute = express();

questionRoute.route('/questions')
.get(questionController.getAllQuestions)
.post(questionController.addQuestions);

questionRoute.route('/questions/:questionId')
 .get(questionController.getAQuestion);


module.exports=questionRoute;