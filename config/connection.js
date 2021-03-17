// Setup code to connect Node to MySQL
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "Meg@deth6",
    database: "database_db"
});

// Make connection
connection.connect((err) => {
    if(err) {console.error("error connecting: " + err.stack);
    return;
}
console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;