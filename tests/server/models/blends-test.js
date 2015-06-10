var dbURI = 'mongodb://localhost:27017/testingDB';
var clearDB = require('mocha-mongoose')(dbURI);

var sinon = require('sinon');
var expect = require('chai').expect;
var mongoose = require('mongoose');
var supertest = require('supertest');
//var app = require('../../../server/app/routes/index.js');
var express = require('express');
var agent = supertest.agent(express());

require('../../../server/db/models/user');
require('../../../server/db/models/blends');
require('../../../server/db/models/micros');
require('../../../server/db/models/orders');
require('../../../server/db/models/reviews');

var User = mongoose.model('User');
var Blend = mongoose.model('Blend');
var Micros = mongoose.model('Micros');
var Order = mongoose.model('Order');
var Review = mongoose.model('Review');

describe('blends model', function () {

    beforeEach('Establish DB connection', function (done) {
        if (mongoose.connection.db) return done();
        mongoose.connect(dbURI, done);
    });

    afterEach('Clear test database', function (done) {
        clearDB(done);
    });

    it('should exist', function () {
        expect(Blend).to.be.a('function');
    });

    describe('Blends', function () {
        it('should post a blend', function(done){
            agent
            .post('/api/blends')
            .send({
                name: "Ben's blend",
                price: 7
            })
            .expect(201)
            .end(function (err, res){
                if(err) return done(err);
                expect(res.body.name).to.equal("Ben's blend");
                done();
            });
        });
        

    });

});
