const sql = require('mssql');

const config = {
    user: 'UserTSX',
    password: 'UserTSX',
    server: 'DESKTOP-BMGC10D', 
    database: 'React_TSX',
    options: {
        encrypt: true, 
        trustServerCertificate: true 
    }
};

async function main(query) {
    try {
        // Establecer conexión
        await sql.connect(config);
        const result = await sql.query(query);
        return result;
    } catch (err) {
        console.error("Error al conectarse a SQL Server:", err);
    }
}

module.exports = main;