const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server'); // Adjust the path as needed
const should = chai.should();
const mongoose = require('mongoose');

chai.use(chaiHttp);

describe('Database Connection', () => {
  it('should connect to the database successfully', (done) => {
    mongoose.connect('mongodb://localhost:27017/testdb', { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});