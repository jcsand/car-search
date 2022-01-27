import { join, dirname } from "path";
import { fileURLToPath } from "url";

const { NODE_ENV, DEV_SERVER } = process.env;

export const mode = NODE_ENV ?? "production";
export const isDevServer = DEV_SERVER === "true";
export const isProd = mode === "production";
export const isDev = !isProd;
export const webpackDir = dirname(fileURLToPath(import.meta.url));
export const rootDir = join(webpackDir, "..");
