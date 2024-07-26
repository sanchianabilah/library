const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Product = sequelize.define('product', {
        productName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }, {
        tableName: 'products',
        timestamps: false
    });

    return Product;
};
