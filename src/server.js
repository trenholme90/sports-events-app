const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const RegisterController = require('./controllers/RegisterController');

const PORT = process.env.PORT || 8080;

// Only use env variables if not production
if(process.env.NODE_ENV != 'production' ) {
    require('dotenv').config()
}

// Enable cors on all routes
app.use(cors());
// No need for body-parser
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from express');
});

app.post('/register', RegisterController.store);

try {
    mongoose.connect(process.env.MONGO_DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('DB connected')
} catch (error) {
    console.log(error)
}

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});