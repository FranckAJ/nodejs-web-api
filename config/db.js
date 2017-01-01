let knexFile = require('../knexfile');
let knex = require('knex')(knexFile[process.env.NODE_ENV || 'development']);
let bookshelf = require('bookshelf')(knex);

bookshelf.plugin(require('bookshelf-bcrypt'));
bookshelf.plugin('visibility');

module.exports = bookshelf;
