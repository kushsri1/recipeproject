const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: "This field is requiered",
    },
    image: {
        type: String,
        required: "This field is requiered",
    },
});

module.exports = mongoose.model("Category", categorySchema);