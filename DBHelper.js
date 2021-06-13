
var mysql      = require('mysql');

module.exports = {
  getConnection  : function() {
      var connection = mysql.createConnection({
          host     : 'localhost',
          user     : 'root',
          password : 'root',
          database : 'crud_demo'
      });

      connection.connect();
      return connection;
  },

    execute : function(queryString,callback) {
      let connection = this.getConnection();
      connection.query(queryString,callback);
      connection.end();
    }
};