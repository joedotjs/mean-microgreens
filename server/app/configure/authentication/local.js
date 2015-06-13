'use strict';
var passport = require('passport');
var _ = require('lodash');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var UserModel = mongoose.model('User');

module.exports = function (app) {

    // When passport.authenticate('local') is used, this function will receive
    // the email and password to run the actual authentication logic.
    var strategyFn = function (email, password, done) {
        UserModel.findOne({ email: email }, function (err, user) {
            if (err) return done(err);
            // user.correctPassword is a method from our UserModel schema.
            if (!user || !user.correctPassword(password)) return done(null, false);
            // Properly authenticated.
            done(null, user);
        });
    };

    function isAuthenticatedUser (req, res, next) {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.sendStatus(401);
        }
    }

    function hasAdminPower(req, res, next){
      console.log('this is req.user', req.user)  
      if(req.user.admin) next();
      else res.status(403).end();
    }

    // A GET / route is created to find all users
    app.get('/users', hasAdminPower, function (req, res, next){
        console.log('this hits the get /users route!')
        UserModel.find({}).exec()
        .then(
          function (users){
            res.status(200).send({ user: _.omit(user.toJSON(),['password', 'salt']) });
          }, 
          function (err){
            next(err);
          }
        );
      });


    // A POST /signup route is created to handle registering users
    app.post('/signup', function (req, res, next) {
        console.log('hit the /signup post route!');
        UserModel.create(req.body, function (err, user) {
            if (err) next(err);
            else {
                console.log('this is req.session', req.session);
                console.log('this is user', user);
                req.logIn(user, function (err){
                  if (err) return next(err);
                  res.status(201).send({ user: _.omit(user.toJSON(),['password', 'salt']) });
                });

            }
        });
    });

    passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, strategyFn));

    // A POST /login route is created to handle login.
    app.post('/login', function (req, res, next) {
      console.log('Logging in');
        var authCb = function (err, user) {

            if (err) return next(err);

            if (!user) {
                var error = new Error('Invalid login credentials');
                error.status = 401;
                return next(error);
            }

            // req.logIn will establish our session.
            req.logIn(user, function (err) {
                if (err) return next(err);
                // We respond with a reponse object that has user with _id and email.
                res.status(200).send({ user: _.omit(user.toJSON(), ['password', 'salt']) });
            });

        };

        passport.authenticate('local', authCb)(req, res, next);

    });
    
    // A PUT route is created to promote users to admin status
    app.put('/promote/:id', hasAdminPower, function (req, res, next) {
        console.log('this hits the put route!')
        UserModel.findOneAndUpdate({ _id: req.params.id }, req.body, function (err, user) {
            console.log('this is req.params.id for the put route', req.params.id)
            if(err) next(err)
            else {
                res.status(200).send({ user: _.omit(user.toJSON(),['password', 'salt']) });
            }
        })
    })

    // A DELETE route is created to delete a user
    app.delete('/delete/:id', hasAdminPower, function (req, res, next) {
        console.log('this deletes a user!')
        UserModel.remove({ _id: req.params.id }, function (err, user) {
            console.log('this is req.params.id for the delete route', req.params.id)
            if(err) next(err)
            else {
                res.status(201).send({ user: _.omit(user.toJSON(),['password', 'salt']) });
            }
        })
    })

    // A PUT route is created to enable password reset for user

    app.put('/reset/:id', isAuthenticatedUser, function (req, res, next) {
        UserModel.findOneAndUpdate({ _id: req.params.id }, req.body, function (err, user) {
            if(err) next(err)
            else {
                res.status(200).send({ user: _.omit(user.toJSON(),['password', 'salt']) })
            }
        })
    })

};