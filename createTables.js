const { optionsMariaDB } = require("./options/MariaDB.js");
const knexMariaDB = require("knex")(optionsMariaDB);
const { optionsSQLite3 } = require("./options/SQLite3.js");
const knexSQLite3 = require("knex")(optionsSQLite3);

knexMariaDB.schema
  .createTableIfNotExists("productos", function (table) {
    table.increments();
    table.string("title");
    table.string("price");
    table.string("thumbnail");
  })
  .then(() => console.log("table created"))
  .catch((error) => {
    console.log(error);
    throw error;
  })
  .finally(() => {
    knexMariaDB.destroy();
  });

knexSQLite3.schema
  .createTableIfNotExists("mensajes", function (table) {
    table.increments();
    table.string("email");
    table.string("mensaje");
    table.string("fecha");
  })
  .then(() => console.log("table created"))
  .catch((error) => {
    console.log(error);
    throw error;
  })
  .finally(() => {
    knexSQLite3.destroy();
  });
