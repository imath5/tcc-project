module.exports = function (app) {

    app.get('/retornar', function (req, res){
        
    var mysql = require('mysql');

    var connection = mysql.createConnection({
        host:'localhost',
        user: 'root',
        password: 'Matheus@97',
        database: 'portal_horas_ufmt'
    });

    connection.query('select * from cadastro', function (error, result){
        res.send(result);
        });
    });

    
 };