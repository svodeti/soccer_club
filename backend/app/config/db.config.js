module.exports = {
  HOST: "localhost",
  USER: "sql",
  PASSWORD: "Apple@1234",
  DB: "soccer",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
