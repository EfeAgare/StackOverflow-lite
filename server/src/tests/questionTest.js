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

