import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === "production" });
export const DB = process.env.DB;
export const PORT = process.env.PORT;
export const SECRET = process.env.SECRET;
