'use strict';

var _knexfile = require('../knexfile');

var _knexfile2 = _interopRequireDefault(_knexfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var knex = require('knex')(_knexfile2.default[process.env.NODE_ENV || 'development']);
var bookshelf = require('bookshelf')(knex);

bookshelf.plugin(require('bookshelf-bcrypt'));
bookshelf.plugin('visibility');

module.exports = bookshelf;