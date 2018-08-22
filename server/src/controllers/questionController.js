import questions from '../models/questions';

/**
 * This class handles question controllers
 * */
class QuestionController {
/**
 * This method get all questions.
 * @param {array} req -
 * @param {array} res -
 * @returns {array} request
 */
  static getAllQuestions(req, res) {
    res.status(200).json(questions);
  }

 
}
export default QuestionController;
