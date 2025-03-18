// Server Dependencies
const express = require("express");
const path = require("path");
// These were added to use nodemon and liveserver together
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

const app = express();
const PORT = 5500;

const liveReloadServer = livereload.createServer();
liveReloadServer.watch([path.join(__dirname, "views"), path.join(__dirname, "public")]);
app.use(connectLivereload());

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

// Some routes
app.get("/", (request, response) => response.render("index", { title: "Home" }));
app.get("/about", (request, response) => response.render("about", { title: "About" }));
app.get("/contact", (request, response) => response.render("contact", { title: "Contact" }));

// Starting the server
app.listen(PORT, function() {
    console.log(`*** Website is live on: http://localhost:${PORT} ***`);
});

// Live server watching what files get changed in the specified folder on line 34
liveReloadServer.server.once("connection", function() {
    setTimeout(function() { liveReloadServer.refresh("/"); }, 100);
});