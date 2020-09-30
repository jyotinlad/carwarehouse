const { sequelize } = require('./models/database');
const models = require('./models');

const createData = async() => {
    await models.User.create({
        name: 'Cook E Monster',
        username: 'cookiemonster',
        password: 'pass',
        cars: [
            {
                make: 'Ford',
                model: 'Focus',
                colour: 'grey'
            },
            {
                make: 'Ford',
                model: 'Ka',
                colour: 'purple'
            }
        ]
    },
    {
        include: [models.Car]
    });

    await models.User.create({
        name: 'El Mo',
        username: 'elmo',
        password: 'pass',
        cars: [
            {
                make: 'Vauxhall',
                model: 'Astra',
                colour: 'green'
            }
        ]
    },
    {
        include: [models.Car]
    });

    await models.User.create({
        name: 'Big B Ird',
        username: 'bigbird',
        password: 'pass',
        cars: [
            {
                make: 'Renault',
                model: 'Clio',
                colour: 'red'
            }
        ]
    },
    {
        include: [models.Car]
    });
}

sequelize.sync({ force: true }).then(async() => {
    try {
        await createData();
        process.exit();
    } catch(error) {
        console.error(error);
    }
})