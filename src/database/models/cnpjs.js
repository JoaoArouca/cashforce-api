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
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      timestamps: false, tableName: 'cnpjs'
    });

    CNPJ.associate = (models) => {
      CNPJ.hasMany(models.Order, {
        foreignKey: 'cnpjid', as: 'cnpj',
      })
    }
  
    return CNPJ;
};
