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

    it('GET Detail Page', (done) => {
        chai.request(app).get('/api/v1/member/detail-page/5e96cbe292b97300fc902223').end((err,resp) => {
            expect(err).to.be.null
            expect(resp).to.have.status(200)
            expect(resp.body).to.be.an('object')
            expect(resp.body).to.have.property('country')
            expect(resp.body).to.have.property('isPopular')
            expect(resp.body).to.have.property('unit')
            expect(resp.body).to.have.property('sumBooking')
            expect(resp.body).to.have.property('imageId')
            expect(resp.body.imageId).to.have.an('array')
            expect(resp.body).to.have.property('activityId')
            expect(resp.body.activityId).to.have.an('array')
            expect(resp.body).to.have.property('_id')
            expect(resp.body).to.have.property('title')
            expect(resp.body).to.have.property('price')
            expect(resp.body).to.have.property('city')
            expect(resp.body).to.have.property('description')
            expect(resp.body).to.have.property('__v')
            expect(resp.body).to.have.property('bank')
            expect(resp.body.bank).to.have.an('array')
            expect(resp.body).to.have.property('testimonial')
            expect(resp.body.testimonial).to.have.an('object')
            done();
        });
    });
});
