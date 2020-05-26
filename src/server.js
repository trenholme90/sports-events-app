const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 8080;

// Only use env variables if not production
if(process.env.NODE_ENV != 'production' ) {
    require('dotenv').config()
}

// Enable cors on all routes
app.use(cors());
// No need for body-parser
app.use(express.json());

try {
    mongoose.connect(process.env.MONGO_DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('DB connected')
} catch (error) {
    console.log(error)
}

app.use(routes);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});