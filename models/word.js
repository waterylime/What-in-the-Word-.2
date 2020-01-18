module.exports = function(sequelize, DataTypes) {
  var Word = sequelize.define("Word", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    language: DataTypes.TEXT,
    description: DataTypes.TEXT,
    image: DataTypes.STRING(1000)
  });
  Word.associate = function(models) {
    Word.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Word;
};
