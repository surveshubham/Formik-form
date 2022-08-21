const connectToMongoose = require('./db');
const express = require('express');

connectToMongoose();

var cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

//using routes
// app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));


//app running on port 3000
app.listen(port, () => {
  console.log(`address-book listening at http://localhost:${port}`)
})