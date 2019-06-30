'use strict';
module.exports = (sequelize, DataTypes) => {
  const profilesCategories = sequelize.define('profilesCategories', {
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {});
  profilesCategories.associate = function(models) {
    // associations can be defined here
  };
  return profilesCategories;
};