function applyExtraSetup(sequelize) {
	const { film, distributor } = sequelize.models;

	distributor.hasMany(film, {foreignKey: 'did'});
	film.belongsTo(distributor, {foreignKey: 'did'});
}

module.exports = { applyExtraSetup };