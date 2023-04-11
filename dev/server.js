const path = require("node:path");

require("dotenv-defaults/config");
require("@swc/register")({
    extensions: [".js", ".ts", ".tsx"],
    configFile: path.resolve(process.cwd(), "swc.config.json"),
});
require("../server").default;
