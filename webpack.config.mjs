import { merge } from "webpack-merge";

import baseConfig from "./webpack/config.base.mjs";
import devConfig from "./webpack/config.dev.mjs";
import prodConfig from "./webpack/config.prod.mjs";
import { isProd } from "./webpack/environment.mjs";

export default () => merge(baseConfig, isProd ? prodConfig : devConfig);
