const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.get('/',(req,res,next)=>{
    res.json({
        code:100
    });
});
console.log(process.env.PORT);
app.listen(process.env.PORT || 3000);