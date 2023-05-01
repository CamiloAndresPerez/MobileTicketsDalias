import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://camiloperez02:camilo1234@daliaspasteleriadatabas.lk4wiff.mongodb.net/daliasdb";
