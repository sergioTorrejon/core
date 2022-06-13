import { DEV_ENV } from "src/config/env/dev/dev.env";
import { PROD_ENV } from "src/config/env/prod/prod.env";
import { Environment } from "src/constants/enums";

export const ENV = process.env.NODE_ENV == Environment.Development? DEV_ENV: PROD_ENV