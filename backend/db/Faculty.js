const {  DataTypes, Model } = require("sequelize");
const { sequelize } = require("./db.js");
class Faculty extends Model {}

Faculty.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    faculty_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    faculty_image: {
      type: DataTypes.STRING,
    //   allowNull: false,
    },
    faculty_skills: {
      type: DataTypes.STRING,
    //   allowNull: false,
    },
    faculty_qualification: {
      type: DataTypes.STRING,
    //   allowNull: false,
    },
    faculty_achievement: {
      type: DataTypes.STRING,
    //   allowNull: false,
    },
    faculty_telegram: {
      type: DataTypes.STRING,
    //   allowNull: false,
    },
    faculty_twitter: {
      type: DataTypes.STRING,
    //   allowNull: false,
    },
    faculty_facebook: {
      type: DataTypes.STRING,
    //   allowNull: false,
    },
    faculty_instagram: {
      type: DataTypes.STRING,
    //   allowNull: false,
    },
    faculty_quora: {
      type: DataTypes.STRING,
    //   allowNull: false,
    },
    faculty_whatsapp: {
      type: DataTypes.STRING,
    //   allowNull: false,
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
    tableName: "tbl_faculty",
    modelName: "Faculty", // We need to choose the model name
  }
);
module.exports = { Faculty };
