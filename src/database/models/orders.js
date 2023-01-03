const { NOW } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      orderNfId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      orderNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      orderPath: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      orderFileName: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      orderOriginalName: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      emissionDate: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      pdfFile: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      emitedTo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nNf: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      CTE: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      value: {
        type: DataTypes.STRING,
        defaultValue: null,
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
      cnpjId: {
        type: DataTypes.INTEGER,
        defaultValue: null,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        references: {
          model: 'cnpjs',
          key: 'id',
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        defaultValue: null,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      buyerId: {
        type: DataTypes.INTEGER,
        defaultValue: null,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        references: {
          model: 'buyers',
          key: 'id',
        },
      },
      providerId: {
        type: DataTypes.INTEGER,
        defaultValue: null,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        references: {
          model: 'providers',
          key: 'id',
        },
      },
      orderStatusBuyer: {
        type: DataTypes.STRING,
        defaultValue: "0",
      },
      orderStatusProvider: {
        type: DataTypes.STRING,
        defaultValue: "0",
      },
      deliveryReceipt: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      cargoPackingList: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      deliveryCtrc: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
    },
    { timestamps: true, tableName: 'orders' }
  );

  Order.associate = (models) => {
    Order.belongsTo(models.CNPJ, { 
      foreignKey: 'cnpjid', as: 'cnpj',
    });

    Order.belongsTo(models.User, { 
      foreignKey: 'userid', as: 'user',
    });

    Order.belongsTo(models.Buyer, { 
      foreignKey: 'buyerid', as: 'buyer',
    });

    Order.belongsTo(models.Provider, { 
      foreignKey: 'providerid', as: 'provider',
    });
  };

  return Order;
};
