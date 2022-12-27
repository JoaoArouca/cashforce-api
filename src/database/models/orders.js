const { NOW } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("orders",
    {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
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
        },
        userId: {
          type: DataTypes.INTEGER,
          defaultValue: null,
        },
        buyerId: {
          type: DataTypes.INTEGER,
          defaultValue: null,
        },
        providerId: {
          type: DataTypes.INTEGER,
          defaultValue: null,
        },
        orderStatusBuyer: {
          type: DataTypes.STRING,
          defaultValue: '0',
        },
        orderStatusProvider: {
          type: DataTypes.STRING,
          defaultValue: '0',
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
        }
      },
    { timestamps: false }
    );
  
    return Order;
};
