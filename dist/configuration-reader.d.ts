export declare class ConfigurationReader {
    private readonly envConfig;
    constructor(filePath: string);
    get(key: string): string;
}
