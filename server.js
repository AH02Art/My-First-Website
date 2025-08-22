// server dependencies
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5500;

app.disable("x-powered-by");
app.use(express.static(path.join(__dirname, "public")));

// setting ejs as the template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Some routes
app.get("/", (request, response) => response.render("index", { title: "Home" }));
app.get("/projects", (request, response) => response.render("projects", { title: "Projects" }));
app.get("/about", (request, response) => response.render("about", { title: "About" }));
app.get("/contact", (request, response) => response.render("contact", { title: "Contact" }));

// Starting the server
app.listen(PORT, function() {
    console.log(`*** Website is live on port: ${PORT} ***`);
});
