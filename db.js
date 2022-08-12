const { Sequelize, DataTypes } = require('sequelize');


async function exec() {
    const sequelize = new Sequelize('postgres://ulia_4d91:pa55w0rd@localhost:5432/movie_rental')

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        const Distributor = sequelize.define('distributor', {
            did: { type: DataTypes.INTEGER, primaryKey: true },
            name: { type: DataTypes.TEXT }
        }, 
        { createdAt: false, updatedAt: false });

        const Film = sequelize.define('film',{
            code: { type: DataTypes.CHAR, primaryKey: true },
            title: { type: DataTypes.TEXT },
            did: { type: DataTypes.INTEGER },
            date_prod: { type: DataTypes.DATE },
            kind: { type: DataTypes.TEXT },
            len: { type: DataTypes.TIME }
        }, 
        { createdAt: false, updatedAt: false });

        Distributor.hasMany(Film, {foreignKey: 'did'});
        Film.belongsTo(Distributor, {foreignKey: 'did'});

        const film = await Film.findOne();
        const distributor = await film.getDistributor();
        const films = await distributor.getFilms();
        
        console.log(film.title);
        console.log(distributor.name);
        console.log(films);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } finally {
        await sequelize.close();
    }
}

exec()
