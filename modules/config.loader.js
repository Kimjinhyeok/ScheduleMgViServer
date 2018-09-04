var fs = require('fs');
var path = require('path');
var ConfigLoader = {};

ConfigLoader.initJwtConfig = (req, res, next) => {
    if (!process.env.JWT_SUBJECT) {
        var file = readFileByFs("jwtConfig.json");
        var jsonFile = JSON.parse(file);

        process.env.JWT_SECRET = jsonFile.secretKey;
        process.env.JWT_ISSUER = jsonFile.issuer;
        process.env.JWT_SUBJECT = jsonFile.subject;

        console.debug('set JWT Config on Process');
    }

    next();
}

readFileByFs = (fileName) => {
    return fs.readFileSync(path.join(__dirname, '../config') + `/${fileName}`, "utf-8");

}

module.exports = ConfigLoader;