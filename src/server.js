const express = require('express');
const cors = require('cors');
require('dotenv').config();

const database = require('./config/database');
const APIRoutes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 9000;

database();
app.use(APIRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
