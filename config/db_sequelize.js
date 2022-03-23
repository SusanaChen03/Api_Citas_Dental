import Sequelize from 'sequelize';

let sequelize;


try {
    sequelize = new Sequelize('videoclubsql', 'root', 'Susana23186', {
        host: 'localhost',
        dialect: 'mysql'
    });
    await sequelize.authenticate();
    console.log('Conexión sequelize conectada.');
    
} catch (error) {
    console.error('No se puede conectar a la base de datos:', error);
};


export default sequelize;
 