import express from "express";

import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/", (req, res) => {

    res.sendFile(
        path.join(__dirname, "../views/index.html")
    );

});

router.get("/result", (req, res) => {

    res.sendFile(
        path.join(__dirname, "../views/result.html")
    );

});

router.get("/admin", (req, res) => {

    res.sendFile(
        path.join(__dirname, "../views/admin-login.html")
    );

});

router.get("/dashboard", (req, res) => {

    res.sendFile(
        path.join(__dirname, "../views/dashboard.html")
    );

});

export default router;
