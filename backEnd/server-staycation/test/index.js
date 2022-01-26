const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../app');

chai.use(chaiHttp);

describe('API ENDPOINT TESTING', () => {
    it('GET Landing Page', (done) => {
        chai.request(app).get('/api/v1/member/landing-page').end((err,resp) => {
            expect(err).to.be.null
            expect(resp).to.have.status(200)
            expect(resp.body).to.be.an('object')
            expect(resp.body).to.have.property('hero')
            expect(resp.body.hero).to.have.all.keys('travelers', 'treasures', 'cities')
            expect(resp.body).to.have.property('mostPicked')
            expect(resp.body.mostPicked).to.have.an('array')
            expect(resp.body).to.have.property('category')
            expect(resp.body.category).to.have.an('array')
            expect(resp.body).to.have.property('testimonial')
            expect(resp.body.testimonial).to.have.an('object')
            done();
        });
    });
});
