const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("./db.js");

class Testimonial extends Model {}

Testimonial.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey:true,
       defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.INTEGER,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    tableName: "tbl_testimonials",
    modelName: "Testimonial", // We need to choose the model name
  }
);
module.exports = { Testimonial };