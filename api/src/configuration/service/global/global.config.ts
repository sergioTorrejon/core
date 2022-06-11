import { ConfigService } from "@nestjs/config";
import { ENV } from "src/configuration/keys/env";
import { DEFAULT_USER, DEFAULT_USER_EMAIL, DEFAULT_USER_PASSWORD } from "src/configuration/service/config.keys";

const configType = (config: ConfigService) => {
    config.get<string>(ENV.DEFAULT_USER);
    config.get<string>(DEFAULT_USER_EMAIL);
    config.get<string>(DEFAULT_USER_PASSWORD);
}
export default configType