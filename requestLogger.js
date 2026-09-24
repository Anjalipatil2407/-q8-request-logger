import fs from "fs";
import path from "path";

const dir = path.resolve();
const logFile = path.join(dir, "logs.json");

const requestLogger = (req, res, next) => {
    
    if (req.path === "/logs") {
        return next();
    }

    const data = fs.readFileSync(logFile, "utf-8");
    const logs = JSON.parse(data);

    const newLog = {
        method: req.method,
        url: req.originalUrl,
        time: new Date().toISOString()
    };

    logs.push(newLog);

    fs.writeFileSync(logFile, JSON.stringify(logs, null, 2));

    next();
};

export default requestLogger;
