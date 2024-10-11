const mongoose = require("mongoose");
const schema = mongoose.Schema({
  CustomerId: Number,
  CustomerName: String,
  OrderName: String,
  OrderType: String,
  Price: Number,
});
module.exports = mongoose.model("GB", schema, "Customers");