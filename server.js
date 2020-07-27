const express = require("express");

const PORT = 8080;

const app = express();

app.use(express.static(__dirname + "/build"));
app.listen(PORT, () => console.log(`listening on port ${PORT}...`));
