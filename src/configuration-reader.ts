import * as dotenv from "dotenv"
import * as fs from "fs"

export class ConfigurationReader {
    private readonly envConfig: { [key: string]: string }

    public constructor(filePath: string) {
        this.envConfig = dotenv.parse(fs.readFileSync(filePath))
    }

    public get(key: string): string {
        return this.envConfig[key]
    }
}
