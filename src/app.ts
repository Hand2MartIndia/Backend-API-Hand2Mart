import express, { Application} from 'express';
import bodyParser from 'body-parser';

const app: Application = express();
const port: number = 5500;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// sequelize.sync().then(() => {
//   console.log('Database & tables created!');
// });

// Define your routes and controllers here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}).on('error', (err: any) => {
  console.error(err);
});

