import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT,
  dbUri: process.env.DB_URI,
  bcrypt_salt_rounds: process.env.bcrypt_salt_rounds,
  jwt_access_expires_in: process.env.jwt_access_expires_in,
  jwt_access_secret: process.env.jwt_access_secret,
};
