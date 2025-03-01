const express = require("express");
const path = require("path");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

const server = express();
const port = 5500;

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "src", "index.html"));
server.use(connectLivereload());

server.use(express.static(path.join(__dirname, "src", "index.html")));

server.get("*", function(request, response) {{
    response.sendFile(path.join(__dirname, "src", "index.html"));
}});

server.listen(port, function() {
    console.log(`*** Website is live on: http://localhost:${port} ***`);
});

liveReloadServer.server.once("connection", function() {
    setTimeout(function() {
        liveReloadServer.refresh("/");
    }, 100);
});