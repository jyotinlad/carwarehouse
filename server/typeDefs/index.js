const carSchema = require('./car');
const userSchema = require('./user');

const defaultSchema = require('./default');

module.exports = [defaultSchema, carSchema, userSchema];
