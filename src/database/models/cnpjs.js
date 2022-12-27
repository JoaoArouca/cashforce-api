const { NOW } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const CNPJ = sequelize.define("cnpjs",
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      cnpj: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      companyType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATETIME,
        allowNull: false,
        defaultValue: NOW(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: NOW(),
      }
    },
    { timestamps: false }
    );
  
    return CNPJ;
};
