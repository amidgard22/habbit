import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/routes";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
