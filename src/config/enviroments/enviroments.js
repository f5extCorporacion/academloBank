import "dotenv/config";
import env from "env-var";

export const envs = {
  PORT: env.get("PORT").required().asPortNumber(),
  DB_URI: env.get("URLBASE").required().asString(),
  NODE_ENV: env.get("NODE_ENV").required().asString(),
};
