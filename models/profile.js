'use strict';
module.exports = (sequelize, DataTypes) => {
  const profile = sequelize.define('profile', {
    userId: DataTypes.INTEGER,
    bio: DataTypes.TEXT,
    profilePic: DataTypes.STRING,
    radius: DataTypes.DOUBLE,
    gender: DataTypes.TEXT,
    lat: DataTypes.DOUBLE,
    long: DataTypes.DOUBLE
  }, {});
  profile.associate = function(models) {
    // associations can be defined here
  };
  return profile;
};