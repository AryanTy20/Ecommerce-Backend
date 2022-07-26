import dotenv from "dotenv";
dotenv.config();
export const {
  DEBUG_MODE,
  PORT,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  DB_URL,
  EMAIL,
  PASS,
} = process.env;
