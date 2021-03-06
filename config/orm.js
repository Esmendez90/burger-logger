// Import mysql connection
const connection = require("./connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

let orm = {
  // In the `orm.js` file, create the methods that will
  // execute the necessary MySQL commands in the controllers.
  // These are the methods you will need to use in order to
  // retrieve and store data in your database.

  // * `selectAll()`
  selectAll: function (tableInput, cb) {
    let query = "SELECT * FROM ??";
    connection.query(query, [tableInput], (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
    console.log([tableInput])
  },
  // * `insertOne()`
  insertOne: function (table, cols, vals, cb) {
    console.log("values =",vals)
    let queryString = "INSERT INTO " + table;
//insert into tablename (burger_name, devoured) values (boobie, true);
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // * `updateOne()`
  updateOne: function(table, objColVals, condition, cb) {


console.log(condition)

    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;



    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  // delete()
  delete: function(table, filters, cb){
    let query = "DELETE FROM ?? WHERE ?";

    connection.query(query, [table, filters], (err, results) => {
      //console.log("QUERY = ", query , table, filters);
      if(err){
        throw error;
      }
      cb(results);
    })
  }
};

// Export the ORM object in `module.exports`
module.exports = orm;
