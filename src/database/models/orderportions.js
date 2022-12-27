const { NOW } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Orderportions = sequelize.define("orderportions",
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      nDup: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dVenc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vDup: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      availableToMarket: {
        type: DataTypes.TINYINT,
        defaultValue: 1,
      },
      createdAt: {
        type: DataTypes.DATETIME,
        allowNull: false,
        defaultValue: NOW(),
      },
      updatedAt: {
        type: DataTypes.DATETIME,
        allowNull: false,
        defaultValue: NOW(),
      },
      orderId: {
        type: DataTypes.INTEGER,
        defaultValue: null,
      }
    },
    { timestamps: false }
    );
  
    return Orderportions;
};
