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
        type: DataTypes.BOOLEAN,
        defaultValue: true,
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
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        references: {
          model: 'orders',
          key: 'id',
        },
      }
    },
    { timestamps: false, tableName: 'orderportions' }
    );
  
    Orderportions.associate = (models) => {
      Orderportions.belongsTo(models.CNPJ, {
        foreignKey: 'cnpjId', as: 'cnpj'
      })
    }

    return Orderportions;
};
