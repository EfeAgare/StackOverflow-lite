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

 /**
   * This method add questions to the to the list of questions
   * @param {object} req -
   * @param {object} res -
   * @returns {object} request
   */
  static addQuestions(req, res) {
    const newQuestion = {
      title: req.body.title,
      questionBody: req.body.questionBody,
      answer: req.body.answer,
      id: questions[questions.length - 1].id + 1,
    };
    if (!newQuestion) {
      return res.sendStatus(200);
    }
    questions.push(newQuestion);
    return res.status(200).json({ data: newQuestion });
  }

  /**
   * This method add answers for a particular question
   * @param  {object} req -
   * @param {object} res -
   * @returns {array} request
   */
  static addAnswer(req, res) {
    const questionId = parseInt(req.params.questionId, 10);
    const question = questions.filter(question => {return question.id === questionId});
    question[0].answers.push(req.body.answer);

    res.status(200).json(question);
  }
}
export default QuestionController;
