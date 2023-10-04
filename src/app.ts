import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import sequelize from './db/db';

const app: Application = express();
const port: number = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



sequelize.sync().then(() => {
  console.log('Database & tables created!');
});

// Define your routes and controllers here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
