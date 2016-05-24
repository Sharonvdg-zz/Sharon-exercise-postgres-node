var pg = require('pg');

var connectionString = "postgres://postgres:Hi123@localhost/postgres";
pg.connect(connectionString, function (err, client, done) {
	var searchUser = process.argv[2];
	client.query('select name from hats where user_id = (select id from users where name = $1)', [searchUser], function (err, result) {
		console.log(result.rows);
	});
});