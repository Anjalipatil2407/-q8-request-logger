import express from "express";
import fs from "fs";
import path from "path";
import requestLogger from "./middleware/requestLogger.js";

const app = express();
const PORT = 3000;

app.use(requestLogger);

app.get("/products", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Products page"
    });
});

app.get("/orders", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Orders page"
    });
});

app.get("/customers", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Customers page"
    });
});

app.get("/logs", (req, res) => {
    const dir = path.resolve();
    const logFile = path.join(dir, "logs.json");

    const data = fs.readFileSync(logFile, "utf-8");
    const logs = JSON.parse(data);

    res.status(200).json({
        success: true,
        count: logs.length,
        data: logs
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});