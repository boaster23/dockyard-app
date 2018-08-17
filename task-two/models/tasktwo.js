'use strict';
module.exports = (sequelize, DataTypes) => {
  var TaskTwo = sequelize.define('TaskTwo', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  TaskTwo.associate = function(models) {
    // associations can be defined here
  };
  return TaskTwo;
};