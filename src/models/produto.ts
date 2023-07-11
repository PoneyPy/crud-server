import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Produto = db.define('Produto', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    unit: {
        type: DataTypes.STRING
    },
    stock: {
        type: DataTypes.NUMBER
    }
}, {
    createdAt: false,
    updatedAt: false
});

export default Produto;