'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiHttp2.default);
describe('/GET', function () {
  it('Should get all questions', function (done) {
    _chai2.default.request(_index2.default).get('/api/v1/questions').end(function (err, res) {
      _chai.assert.equal(res.status, 200);
      _chai.assert.typeOf(res.body, 'array');
      done();
    });
  });
});

describe('/GET/:questionId', function () {
  it('Fetch a Particular question', function (done) {
    _chai2.default.request(_index2.default).get('/api/v1/questions/0').end(function (err, res) {
      _chai.assert.equal(res.status, 200);
      _chai.assert.typeOf(res.body, 'array');
      done();
    });
  });
});

describe('/POST', function () {
  it('Should post a new question', function (done) {
    _chai2.default.request(_index2.default).post('/api/v1/questions').send({
      title: 'what is newton\'s Law',
      questionBody: ' the law in school?'
    }).end(function (err, res) {
      _chai.assert.equal(res.status, 200);
      _chai.assert.typeOf(res.body, 'object');

      done();
    });
  });
});

describe('/POST', function () {
  it('Should add an answer', function (done) {
    _chai2.default.request(_index2.default).post('/api/v1/questions/2/answers').send({
      answer: 'what is newton\'s Law'

    }).end(function (err, res) {
      _chai.assert.equal(res.status, 200);
      _chai.assert.typeOf(res.body, 'array');
      done();
    });
  });
});