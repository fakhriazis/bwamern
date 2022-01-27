const chai = require('chai');
const chaiHttp = require('chai-http');
const { request } = require('../app');
const expect = chai.expect;
const app = require('../app');
const fs = require('fs');
const { resolve } = require('path/posix');

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

    it('POST Booking Page', (done) => {
        const image = __dirname + '/buktibayar.jpeg'
        const dataSample = {
            image,
            idItem: '5e96cbe292b97300fc902223',
            duration: 2,
            bookingStartDate: '9-4-2020',
            bookingEndDate: '11-4-2020',
            firstName: 'itce',
            lastName: 'diasari',
            email: 'itce@gmail.com',
            phoneNumber: '08150008989',
            accountHolder: 'itce',
            bankFrom: 'BNI'
        }
        chai.request(app).post('/api/v1/member/booking-page/')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .field('idItem', dataSample.idItem)
        .field('duration', dataSample.duration)
        .field('bookingStartDate', dataSample.bookingStartDate)
        .field('bookingEndDate', dataSample.bookingEndDate)
        .field('firstName', dataSample.firstName)
        .field('lastName', dataSample.lastName)
        .field('email', dataSample.email)
        .field('phoneNumber', dataSample.phoneNumber)
        .field('accountHolder', dataSample.accountHolder)
        .field('bankFrom', dataSample.bankFrom)
        .attach('image', fs.readFileSync(dataSample.image), 'buktibayar.jpeg')
        .end((err,resp) => {
            expect(err).to.be.null
            expect(resp).to.have.status(201)
            expect(resp.body).to.be.an('object')
            expect(resp.body).to.have.property('message')
            expect(resp.body.message).to.equal('Success Booking')
            expect(resp.body).to.have.property('booking')
            expect(resp.body.booking).to.have.all.keys('payments', '_id', 'invoice', 'bookingStartDate', 'bookingEndDate', 'total', 'itemId', 'memberId', '__v')
            expect(resp.body.booking.payments).to.have.all.keys('status', 'proofPayment', 'bankFrom', 'accountHolder')
            expect(resp.body.booking.itemId).to.have.all.keys('_id', 'title', 'price','duration')
            done();
        });
    });
});
