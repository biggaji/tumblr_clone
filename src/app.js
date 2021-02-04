const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const indexRouter = require("../src/routes/index_router/index");

const app = express();

// static files config
app.use(express.static(path.join(__dirname, "static")));

app.engine("hbs", exphbs({ defaultLayout: "main" }));

// layout engine
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));


app.use("/", indexRouter);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});