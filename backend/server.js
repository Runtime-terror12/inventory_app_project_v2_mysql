const express = require('express');
const path = require('path');
const cors = require('cors');
const debug = require('debug')('app:server');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const sequelize = require("./src/db");



const routes = require('./src/routes/users.js');


sequelize
  .authenticate()
  .then((res) => debug(colors.blue.inverse('Database is connected')))
  .catch((err) => {
    debug(
      colors.red.inverse('There was an error connecting to the database'),
      err
    );
    process.exit(1);
  });


const app = express();
app.use(cors()); //allows for cross-origin resource sharing

app.get('/', (req, res) => res.send('INDEX'));


if((process.env.MODE = 'development')) {
  app.use(morgan('dev'));
}

dotenv.config({ path: path.join(__dirname, '..', '.env') }); 
app.use(express.static(path.join(__dirname, 'src', 'public'))); 
app.use(express.json()); 


app.use('/api', routes);
const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
  debug(colors.rainbow(`Server is up and running on PORT: ${PORT}`));
});
