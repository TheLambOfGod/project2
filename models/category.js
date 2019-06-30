'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.TEXT
  }, {});
  category.associate = function(models) {
    // associations can be defined here
  };
  return category;
};