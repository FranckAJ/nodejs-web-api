'use strict';

var knexFile = require('../knexfile');
var knex = require('knex')(knexFile[process.env.NODE_ENV || 'development']);
var bookshelf = require('bookshelf')(knex);

bookshelf.plugin(require('bookshelf-bcrypt'));
bookshelf.plugin('visibility');

module.exports = bookshelf;