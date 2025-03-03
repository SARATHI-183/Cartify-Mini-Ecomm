const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const app = express();

dotenv.config({ path: path.join(__dirname, '../config.env')})

const products = require('./Routes/productRoute');
const order = require('./Routes/orderRoute');
const connectDatabase = require('./Config/connectDatabase');

connectDatabase();

app.use(express.json());
app.use(cors());

app.use('/api/v1/', products);
app.use('/api/v1/', order);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend' ,'build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'))
    });
}

app.listen(process.env.PORT, ()=>{
    
    console.log(`Server listening to the Port http://localhost:${process.env.PORT} in ${process.env.NODE_ENV}`);
})