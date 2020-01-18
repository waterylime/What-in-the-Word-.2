require('dotenv').config();
let connection; 
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: 'localhost',
		port: 3306,
		user: process.env.SQL_USER,
		password: Sootball12
		database: 'words1_db'
	});
}
connection.connect(function(err) {
	if (err) throw err;
});
module.exports = connection;


