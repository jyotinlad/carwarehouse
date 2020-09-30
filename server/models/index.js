
const { sequelize } = require('./database');
const { DataTypes } = require('sequelize');

const car = require('./car');
const user = require('./user');

const models = {
    Car: car(sequelize, DataTypes),
    User: user(sequelize, DataTypes)
}

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

module.exports = models;
