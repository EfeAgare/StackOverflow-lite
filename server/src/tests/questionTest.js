import chai, { assert } from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
describe('/GET', () => {
  it('Should get all questions', (done) => {
    chai.request(app)
      .get('/api/v1/questions')
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.typeOf(res.body, 'array');
        done();
      });
  });
});


describe('/GET/:questionId', () => {
  it('Fetch a Particular question', (done) => {
    chai.request(app)
      .get('/api/v1/questions/0')
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.typeOf(res.body, 'array');
        done();
      });
  });
});

describe('/POST', () => {
  it('Should post a new question', (done) => {
    chai.request(app)
      .post('/api/v1/questions')
      .send({
        title: 'what is newton\'s Law',
        questionBody: ' the law in school?',
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.typeOf(res.body, 'object');

        done();
      });
  });
});

describe('/POST', () => {
  it('Should add an answer', (done) => {
    chai.request(app)
      .post('/api/v1/questions/2/answers')
      .send({
        answer: 'what is newton\'s Law',

      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.typeOf(res.body, 'array');
        done();
      });
  });
});