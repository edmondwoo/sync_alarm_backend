const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "sqlite",
    connection: {
      //filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '/data/strapi.db')),
      filename: env(
        "DATABASE_FILENAME",
        path.join(__dirname, "..", "data/strapi.db")
      ),
    },
    useNullAsDefault: true,
  },
});
