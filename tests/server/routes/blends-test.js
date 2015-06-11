var dbURI = 'mongodb://localhost:27017/testingDB';
var clearDB = require('mocha-mongoose')(dbURI);

var sinon = require('sinon');
var expect = require('chai').expect;
var mongoose = require('mongoose');
var supertest = require('supertest');
var express = require('express');

require('../../../server/db/models/user');
require('../../../server/db/models/blend');
require('../../../server/db/models/micro');
require('../../../server/db/models/order');
require('../../../server/db/models/review');

var app = require('../../../server/app/index.js');
var agent = supertest.agent(app);

var User = mongoose.model('User');
var Blend = mongoose.model('Blend');
var Micro = mongoose.model('Micro');
var Order = mongoose.model('Order');
var Review = mongoose.model('Review');

describe('blend model', function () {

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

    describe('Blend', function () {
        it('should post a blend', function(done){
            agent
            .post('/api/blends')
            .send({
                name: "Ben's blend",
                price: 7
            })
            .expect(200)
            .end(function (err, res){
                if(err) return done(err);
                expect(res.body.name).to.equal("Ben's blend");
                done();
            });
        });
        

    });

});
