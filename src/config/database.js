const mongoose = require('mongoose');
require('dotenv').config();

const databaseUrl = process.env.NODE_ENV !== 'development' ? process.env.MONGODB_URI : process.env.HOST;
const database = async () => {
  try {
    const con = await mongoose.connect(databaseUrl);
    if (con) {
      console.log(`Database Connected on ${con.connection.host}`);
    } else {
      console.log('Failed to connect Database');
    }
  } catch (error) {
    console.log(`Failed with error: ${error.message}`);
  }
};
module.exports = database;
