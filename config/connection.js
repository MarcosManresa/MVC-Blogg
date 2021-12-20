const sqlize = require('sequelize');
require('dotenv').config();

let sqlize;

if(process.env.JAWSDB_URL){
    sqlize = new sqlize(process.env.JAWSDB_URL);
} else {
    sqlize = new sqlize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'msql',
        port: 3306
    });
}

module.exports = sqlize;