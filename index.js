const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { mongoDBConnection } = require('./src/connections');

const app = express();
dotenv.config();

const setupServer = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  console.log('Server setup done');
};

const setupDatabase = async () => {
	await mongoDBConnection();
}

app.listen(process.env.PORT, async () => {
  console.log(`React Course Backend running on port ${process.env.PORT}`);
	setupServer();
	await setupDatabase();
});
