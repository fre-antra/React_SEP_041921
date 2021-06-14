'use strict';
/*
This file (db.js) represents an in-memory db in the form of a javascript object.
*/
module.exports = {
  // DO NOT MODIFY usersById
  usersById: {
    1: {
      username: 'Erica',
      age: 90,
    },
    2: {
      username: 'Tina',
      age: 90,
    },
    3: {
      username: 'Sam',
      age: 45,
    },
    4: {
      username: 'Patrick',
      age: 18,
    },
    5: {
      username: 'Jane',
      age: 18,
    },
    6: {
      username: 'Jason',
      age: 34,
    },
  },

  // DO NOT MODIFY hobbiesOfUserByUsername
  hobbiesOfUserByUsername: {
    Erica: ['hiking', 'baseball', 'cook'],
    Tina: ['movie', 'baseball', 'cook'],
    Sam: ['pc gaming', 'football', 'basketball'],
    Patrick: ['pc gaming', 'cross fit', 'basketball'],
    Jane: ['pc gaming', 'movie', 'cook'],
    Jason: ['cross fit'],
  },
};
