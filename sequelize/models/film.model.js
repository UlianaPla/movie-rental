const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('film',{
        code: { type: DataTypes.CHAR, primaryKey: true },
        title: { type: DataTypes.TEXT },
        did: { type: DataTypes.INTEGER },
        date_prod: { type: DataTypes.DATE },
        kind: { type: DataTypes.TEXT },
        len: { type: DataTypes.TIME }
    }, 
    { createdAt: false, updatedAt: false });
};