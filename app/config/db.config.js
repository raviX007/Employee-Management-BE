const config = {
  HOST: process.env.HOST,
  USER: process.env.USERNAME,
  DB_PORT: process.env.DB_PORT,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DB,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

// Add this for debugging
console.log('Database config (password hidden):', {
  ...config,
  PASSWORD: '****'
});

module.exports = config;