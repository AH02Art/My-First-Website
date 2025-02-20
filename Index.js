const express = require("express");
const path = require("path");
const server = express();
const port = 5500;

server.use(express.static(path.join(__dirname, "src")));

server.get("/", function(request, response) {{
    response.sendFile(path.join(__dirname, "src", "index.html"));
}});

server.listen(port, function() {
    console.log(`*** Website is live on: http://localhost:${port} ***`);
});