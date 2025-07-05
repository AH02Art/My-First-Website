// server dependencies
const express = require("express");
const path = require("path");
// These dependencies are to use Live Server + nodemon together
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

const app = express();
const PORT = 5500;

// what specified folders to monitor changes
const liveReloadServer = livereload.createServer();
liveReloadServer.watch([
    path.join(__dirname, "public"),
    path.join(__dirname, "views")
]);

// a Timer for when the server resets after changes (I may change it...)
liveReloadServer.server.once("connection", function() {
    console.log("LiveReload online");
    setTimeout(function() {
        console.log("Browser refreshed...");
        liveReloadServer.refresh("/");
    }, 100);
});

app.use(connectLivereload());
app.use(express.static(path.join(__dirname, "public")));

// setting ejs as the template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Some routes
app.get("/", (request, response) => response.render("index", { title: "Home" }));
app.get("/about", (request, response) => response.render("about", { title: "About" }));
app.get("/projects", (request, response) => response.render("projects", { title: "Projects" }));
app.get("/contact", (request, response) => response.render("contact", { title: "Contact" }));

// Starting the server
app.listen(PORT, function() {
    console.log(`*** Website is live on: http://localhost:${PORT} ***`);
});
