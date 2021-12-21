import { Sequelize } from "sequelize";
import db from "../banco/db.js";

export default db.define('funcionario', {
    fno: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    fnome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cod_cargo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pno: {
        type: Sequelize.BIGINT,
        allowNull: false
    }
},
    {
    freezeTableName: true,
    timestamps: false
})