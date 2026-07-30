import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";

import connectDatabase from "./config/database.js";
import webRoutes from "./routes/web.js";
import apiRoutes from "./routes/api.js";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

connectDatabase();

app.use("/", webRoutes);
app.use("/api", apiRoutes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Page Not Found"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
