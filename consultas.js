const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '855518qwe',
    database: 'plan_de_viajes',
    allowExitOnIdle: true
});