
const conn = require('./database/connection');

const email = 'a.moreiraskate@gmail.com';

console.log(conn('users').where('email', email).select('*'));