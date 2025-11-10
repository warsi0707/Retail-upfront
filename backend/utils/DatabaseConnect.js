const mongoose = require("mongoose");
const { MONGO_URL } = require("./Utils");

const DbConnect = () => {
  try {
    mongoose.connect(MONGO_URL);
    console.log("Database connected ");
  } catch (error) {
    console.error(error);
  }
};

module.exports = DbConnect;