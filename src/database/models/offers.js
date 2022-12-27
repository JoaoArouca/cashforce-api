const { NOW } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Offer = sequelize.define("offers",
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      tax: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tariff: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adValorem: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      float: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      iof: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      expiresIn: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      paymentStatusSponsor: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
      },
      paymentStatusProvider: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: NOW(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: NOW(),
      },
      orderId: {
        type: DataTypes.INTEGER,
        defaultValue: null,
      },
      sponsorId: {
        type: DataTypes.INTEGER,
        defaultValue: null,
      }
    },
    { timestamps: false }
    );
  
    return Offer;
};
