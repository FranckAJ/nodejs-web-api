import db from '../../config/db';

module.exports = db.Model.extend({
	tableName : 'users',
	hasTimestamps: true,
	bcrypt: {
		field: 'password'
	},
	hidden: ['password']

});


