let knexFile = require('../knexfile');
let knex = require('knex')(knexFile[process.env.NODE_ENV || 'development']);
let bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;