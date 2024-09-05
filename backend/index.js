const express= require('express');
const app = express();
const bodyParser=require('body-parser');
const cors=require('cors');
const allRouter=require('./Routes/indexRouter')

const cookieparser=require('cookie-parser')
require('dotenv').config();
require('./Models/db');

const PORT= process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());
app.use(cookieparser())

app.use('/api',allRouter)



app.listen(PORT, ()=>{
    console.log("Server is Running on 8080")
})