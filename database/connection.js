var mysql= require('mysql');
var conn=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tecsup2022',
    database: 'agenda',
    multipleStatements: true
});

conn.connect(err =>{
    if(!err){
        console.log(`Database connection succesfull`)
    }else{
        console.log(`Database connection failed: ${err}`)
    }
});

module.exports= conn;