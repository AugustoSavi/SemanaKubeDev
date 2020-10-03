const { json } = require('express');
const express = require('express');

const app = express();

app.get('/fahrenheit/:valor/celsius',(req,res)=>{

    let valor = req.params.valor;

    const celsius = (valor - 32)* 5 / 9;

    res.json({valor: celsius})
})

app.get('/celsius/:valor/fahrenheit',(req,res)=>{

    let valor = req.params.valor;

    const fahrenheit = (valor * 9 / 5) + 32;

    res.json({valor: fahrenheit})
})


app.listen(8080,()=>{
    console.log('O server do pai ta on')
});