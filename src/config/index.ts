import dotenv from "dotenv";

dotenv.config();

type DB = string;
type PORT = number;
type SECRET = string;

export const DB = process.env.DB!;
export const PORT = parseInt(process.env.PORT!);
export const SECRET = process.env.SECRET!;
