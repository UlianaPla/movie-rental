const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('distributor', {
        did: { type: DataTypes.INTEGER, primaryKey: true },
        name: { type: DataTypes.TEXT }
    }, 
    { createdAt: false, updatedAt: false });
};