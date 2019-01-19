"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const configuration_reader_1 = require("./configuration-reader");
let configurationReader;
describe("Processor", () => {
    beforeEach(async () => {
        configurationReader =
            new configuration_reader_1.ConfigurationReader(path.join(__dirname, "../template.env"));
    });
    it("processes direct match", async () => {
        expect(configurationReader.get("testVariable"))
            .toBe("42");
    });
});
