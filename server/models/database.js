const mongoose = require("mongoose");


let MONGO_URL = "mongodb://127.0.0.1:27017/recipes"

main().then((res)=> {
    console.log("connected to DB");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect(MONGO_URL);
}

//Node.js
require("./Category")
require("./Recipe")