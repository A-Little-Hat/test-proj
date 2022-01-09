const express = require('express');
const app = express();
app.listen(3000, () => console.log('Server started on port 3000'));

app.get('/',(req,res)=>{
    var resJSON = {
        "res" : "I'm main entry point."
    }
    res.json(resJSON);
})

app.get('/world', (req, res) => {
    var resJSON = {
        "res" : "I'm world.!"
    }
    res.json(resJSON)
})

app.get('/hello',(req,res)=>{
    var resJSON = {
        "res" : "I'm hello."
    }
    res.json(resJSON);
})