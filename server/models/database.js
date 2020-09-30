require('dotenv').config( {path:__dirname+'/../.env'} );

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'carwarehouse', 
    process.env.MYSQL_USER, 
    process.env.MYSQL_PASSWORD, 
    {
        dialect: 'mysql',
        operatorAliases: false,
        define: {
            timestamps: false
        }
    }
);

module.exports = {
    sequelize
};
