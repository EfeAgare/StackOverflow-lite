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

  /**
  * This method gets a particulat question on request
  *
  * @param {object} req -
  * @param {object} res -
  * @returns {object} request
  */
  static getAQuestion(req, res) {
    const id = parseInt(req.params.questionId, 10);
    const result = questions.filter(question => question.id === id);

    res.status(200).json(result);
  }

 
}
export default QuestionController;
