import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";


const user = sequelize.define('User',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },

    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

export default user;