const express = require("express");
const path = require("path");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

const server = express();
const PORT = 5500;

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "src"));
server.use(connectLivereload());

server.use(express.static(path.join(__dirname, "src")));

server.get("*", function(request, response) {{
    response.sendFile(path.join(__dirname, "src", "index.html"));
}});

server.listen(PORT, function() {
    console.log(`*** Website is live on: http://localhost:${PORT} ***`);
});

liveReloadServer.server.once("connection", function() {
    setTimeout(function() {
        liveReloadServer.refresh("/");
    }, 100);
});