import * as path from "path"
import { ConfigurationReader } from "./configuration-reader"

let configurationReader: ConfigurationReader

describe("Processor", () => {
    beforeEach(async () => {
        configurationReader =
            new ConfigurationReader(path.join(__dirname, "../template.env"))
    })

    it("processes direct match", async () => {
        expect(configurationReader.get("testVariable"))
            .toBe("42")
    })
})
