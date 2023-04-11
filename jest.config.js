const { readFileSync } = require("node:fs");
const path = require("node:path");

const config = JSON.parse(
    readFileSync(path.join(__dirname, "swc.config.json"), "utf-8")
);

module.exports = {
    transform: {
        "^.+\\.(t|j)sx?$": ["@swc/jest", config],
    },
};
