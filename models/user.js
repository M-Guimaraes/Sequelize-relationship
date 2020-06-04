'use strict';
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			email: DataTypes.STRING,
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			companyId: DataTypes.INTEGER,
		},
		{}
	);
	User.associate = function (models) {
		User.belongsTo(models.Company, { foreingnKey: 'companyId', as: 'company' });
		User.belongsToMany(models.WorkingDay, {
			through: 'UsersWorkingDays',
			foreignKey: 'userId',
			as: 'days',
		});
	};
	return User;
};
