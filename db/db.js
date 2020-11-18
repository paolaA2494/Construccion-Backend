const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'bt7pvjirejlpi0cakdfh-mysql.services.clever-cloud.com',
    user: 'uxhghttligjvbcgr',
    password: '3UQSS41qbgbha2QQ8yjm',
    database: 'bt7pvjirejlpi0cakdfh',
    multipleStatements: true
});

mysqlConnection.connect( (error) =>{
    if(error){
        console.error(error);
        return;
    } else {
        console.log('Base de datos está conectada!');
    }
})

module.exports = mysqlConnection;