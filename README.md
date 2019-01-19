# Configuration Reader
As simple as it gets

# Usage Example
    import { ConfigurationReader } from "configuration-reader"
    import * as path from "path"
    
    // you can adjust the filename here - remember updating .gitignore
    const yourFileName: string = "../template.env"

    const configurationReader: ConfigurationReader = 
        new ConfigurationReader(path.join(__dirname, yourFileName))

    const testVariable: string = this.configurationReader.get("testVariable")

    console.log(testVariable)

# Example data
Check the file **template.env**. It contains an example entry **testVariable=42**.
Be careful to add your real configuration data to a file which is mentioned in the **.gitignore** file.