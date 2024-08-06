const express = require("express");
const app = express();
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const routes = require("./server/routes/recipeRoutes.js")
const fileUpload = require("express-fileupload");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");


let MONGO_URL = "mongodb://127.0.0.1:27017/recipes"

main().then((res)=> {
    console.log("connected to DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
};

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(expressLayouts);

app.use(cookieParser("CookieBlogSecure"));
app.use(session({
  secret: "CookingBlogSecretSession",
  saveUninitialized: true,
  resave: true,
}));
app.use(flash());
app.use(fileUpload());


app.set("view engine", "ejs");


app.set("layout", "./layouts/main");
app.use("/", routes);


app.listen(8080, ()=> {
    console.log("app is listening to port 8080")
})