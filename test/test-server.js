const chai = require('chai');
const chaiHttp = require('chai-http');

const {app} = require('../server');
const expect = chai.expect;
const should = chai.should();
chai.use(chaiHttp);


describe('API', function() {
  
     it('should 200 on GET requests', function() {
       chai.request(app)
         .get('/api/fooooo')
         .end(function(res) {
           res.should.have.status(200);
           res.should.be.json;
         })
     });
   });

let server;

before(()=> {
  server=app.listen(0);
});

after(() => {
  server.close();
});