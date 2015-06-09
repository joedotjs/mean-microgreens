/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

Refer to the q documentation for why and how q.invoke is used.

*/

var mongoose = require('mongoose');
var connectToDb = require('./server/db');
var User = mongoose.model('User');
var Micros = mongoose.model('Micros');
var q = require('q');
var chalk = require('chalk');

var getCurrentUserData = function () {
    return q.ninvoke(User, 'find', {});
};

var getSeedMicroData = function () {
    return q.ninvoke(Micros, 'find', {});
};

var seedUsers = function () {

    var users = [
        {
            email: 'testing@fsa.com',
            password: 'password'
        },
        {
            email: 'obama@gmail.com',
            password: 'potus'
        }
    ];

    return q.invoke(User, 'create', users);

};

var seedMicros = function () {

    var micros = [
    {
        name: 'Broccoli',
        spice: 'mild',
        price: 2,
        info: {
            background: 'The vegetable that your parents always told you to eat',
            image: 'http://www.profproduce.com/wp-content/uploads/2013/04/Broccoli.jpg'
        },
        inventory: 50,
        available: true
    },
    {
        name: 'Arugula',
        spice: 'medium',
        price: 3,
        info: {
            background: 'You either love it or hate it. You are a loser if you do not love it',
            image: 'http://cdn2.johnnyseeds.com/images/product/large/385M.jpg'
        },
        inventory: 50,
        available: true
    },
    {
        name: 'Basil',
        spice: 'medium-spicy',
        price: 4,
        info: {
            background: 'Destroyer of phlegm',
            image: 'http://cdn2.johnnyseeds.com/images/product/large/944M.jpg'
        },
        inventory: 50,
        available: true
    },
    {
        name: 'Mustard Greens',
        spice: 'medium-spicy',
        price: 4,
        info: {
            background: 'Gives you smooth poop',
            image: 'http://cdn2.johnnyseeds.com/images/product/large/2797M.jpg'
        },
        inventory: 50,
        available: true
    },
    {
        name: 'Celery Leaf',
        spice: 'mild',
        price: 2,
        info: {
            background: 'Meh',
            image: 'http://cdn2.johnnyseeds.com/images/product/large/922M.jpg'
        },
        inventory: 50,
        available: true
    },
    {
        name: 'Kale',
        spice: 'mild',
        price: 5,
        info: {
            background: 'Hipsters love this shit',
            image: 'http://cdn2.johnnyseeds.com/images/product/large/363MG.jpg'
        },
        inventory: 100,
        available: true
    },
    {
        name: 'Spinach',
        spice: 'mild',
        price: 3,
        info: {
            background: 'This should be your vegetable of choice if you are Popeye!',
            image: 'http://cdn2.johnnyseeds.com/images/product/large/363MG.jpg'
        },
        inventory: 100,
        available: true
    },
    {
        name: 'Swiss Chard',
        spice: 'mild',
        price: 4,
        info: {
            background: 'Skinny watermelon',
            image: 'http://cdn1.johnnyseeds.com/images/Product/large/702MG.jpg'
        },
        inventory: 100,
        available: true
    },
    {
        name: 'Cressida Cress',
        spice: 'medium',
        price: 4,
        info: {
            background: 'Pretty, but bitter, like your ex',
            image: 'http://cdn1.johnnyseeds.com/images/product/large/382M.jpg'
        },
        inventory: 100,
        available: true
    },
    {
        name: 'Lettuce',
        spice: 'mild',
        price: 2,
        info: {
            background: 'You can put this shit on everything',
            image: 'http://www.microgreengarden.com/photos/LETTUCE-Endive-Escarole-microgreens-Asteraceae-Family-of-Leafy-Greens/05-AsteraceaeFamilyLettuceEndive-16Lettuce-romaine-red10day.jpg'
        },
        inventory: 100,
        available: true
    },
    ];

    return q.invoke(Micros, 'create', micros);

}

// var seedBlends = function () {
//     var blends = [
//     {
//         name: "Joe's Mega Blend",
//         micros: [
//         {
//             name: 'Lettuce',
//             info: {
//                 background: 'You can put this shit on everything',
//                 image: 'http://www.microgreengarden.com/photos/LETTUCE-Endive-Escarole-microgreens-Asteraceae-Family-of-Leafy-Greens/05-AsteraceaeFamilyLettuceEndive-16Lettuce-romaine-red10day.jpg'
//             }
//         },
//         {
//             name: 'Swiss Chard',
//             info: {
//                 background: 'Skinny watermelon',
//                 image: 'http://cdn1.johnnyseeds.com/images/Product/large/702MG.jpg'
//             }
//         },
//         {
//             name: 'Mustard Greens',
//             info: {
//                 background: 'Gives you smooth poop',
//                 image: 'http://cdn2.johnnyseeds.com/images/product/large/2797M.jpg'
//             }
//         },
//         {
//             name: 'Spinach',
//             info: {
//                 background: 'This should be your vegetable of choice if you are Popeye!',
//                 image: 'http://cdn2.johnnyseeds.com/images/product/large/363MG.jpg'
//             }
//         },
//         {
//             name: 'Broccoli',
//             info: {
//                 background: 'The vegetable that your parents always told you to eat',
//                 image: 'http://www.profproduce.com/wp-content/uploads/2013/04/Broccoli.jpg'
//             }
//         }
//         ],
//         price: 12
//     },
//     {
//         name: "MEAN Greens Classic",
//         micros: [
//         {
//             name: 'Cressida Cress',
//             info: {
//                 background: 'Pretty, but bitter, like your ex',
//                 image: 'http://cdn1.johnnyseeds.com/images/product/large/382M.jpg'
//             }
//         },
//         {
//             name: 'Swiss Chard',
//             info: {
//                 background: 'Skinny watermelon',
//                 image: 'http://cdn1.johnnyseeds.com/images/Product/large/702MG.jpg'
//             }
//         },
//         {
//             name: 'Mustard Greens',
//             info: {
//                 background: 'Gives you smooth poop',
//                 image: 'http://cdn2.johnnyseeds.com/images/product/large/2797M.jpg'
//             }
//         },
//         {
//             name: 'Spinach',
//             info: {
//                 background: 'This should be your vegetable of choice if you are Popeye!',
//                 image: 'http://cdn2.johnnyseeds.com/images/product/large/363MG.jpg'
//             }
//         },
//         {
//             name: 'Broccoli',
//             info: {
//                 background: 'The vegetable that your parents always told you to eat',
//                 image: 'http://www.profproduce.com/wp-content/uploads/2013/04/Broccoli.jpg'
//             }
//         }
//         ],
//         price: 12
//     }
//     ];
// }



connectToDb.then(function () {
    var seededUsers = getCurrentUserData().then(function (users) {
        // if (users.length === 0) {
        //     return seedUsers();
        // } else {
        //     console.log(chalk.magenta('Seems to already be user data'));
        //     return users;
        // }
        return users.length ? users : seedUsers();
    });
    var seededMicros = getSeedMicroData().then(function(micros){
        // if (micros.length === 0) {
        //     return seedMicros();
        // } else {
        //     console.log(chalk.magenta('Seems to already be micro data'));
        //     return micros;
        // }
        return micros.length ? micros : seedMicros();
    })
    return q.all([seededUsers, seededMicros])
}).spread(function (users, micros){
    console.log('all seeded', micros)
    process.kill(0)
}).catch(console.error);