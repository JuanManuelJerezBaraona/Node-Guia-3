import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '855518qwe',
    database: 'plan_de_viajes',
    allowExitOnIdle: true
});

const getDate = async () => {
    const result = await pool.query('SELECT NOW()');
    console.log(result);
};
getDate();

const agregarViaje = async (destino, presupuesto) => {
    const consulta = 'INSERT INTO viajes values (DEFAULT, $1, $2)';
    const values = [destino, presupuesto];
    const result = await pool.query(consulta, values);
    console.log('Viaje agregado');
};
agregarViaje('Cancun', '1000');

const obtenerViajes = async () => {
    const { rows } = await pool.query('SELECT * FROM viajes');
    console.log(rows);
    return rows;
};
obtenerViajes();

export { agregarViaje, obtenerViajes };