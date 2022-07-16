const express = require ('express');
const app = 

app.set ('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('secao/index');
});

app.get('/home', function(req, res){
    res.render('secao/home');
});

app.get('/cadastro', function(req, res){
    res.render('secao/cadastro');
});

app.listen(3000, function(){
    console.log('Servidor rodando com Express');
});