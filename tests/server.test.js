// Import required libraries
import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../app.js';

// Configure chai
const expect = chai.expect;
chai.use(chaiHttp);

describe("HTTP Status 200 Test", () => {
  it("should return status 200 for GET /", (done) => {
    chai.request.execute(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
