/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('worker', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    photo: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'worker'
  });
};
