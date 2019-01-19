# Configuration Reader
As simple as it gets

# Usage Example
    import * as path from "path"

    const configurationReader: ConfigurationReader = 
        new ConfigurationReader(path.join(__dirname, "../template.env"))

    const testVariable: string = this.configurationReader.get("testVariable")

    console.log(testVariable)

# Example data
Check the file **template.env**. It contains an example entry **testVariable=42**