const fs = require('fs');
const whois = require('whois-json');

async function performWHOISLookup(domain) {
    try {
        const result = await whois(domain); // Perform the WHOIS lookup
        const outputDir = './output';
        const outputFile = 'data.json';

        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir); // Create the 'output' directory if it doesn't exist
        }

        const outputPath = `${outputDir}/${outputFile}`;
        fs.writeFileSync(outputPath, JSON.stringify(result, null, 2)); // Write the complete WHOIS lookup details to the 'results.json' file

        console.log(`Complete WHOIS lookup results for ${domain} saved to ${outputPath}`);
    } catch (error) {
        console.error("Error performing WHOIS lookup:", error);
    }
}

const domainName = "zerohedge.com"; // Replace with the domain name you want to lookup
performWHOISLookup(domainName); // Initiate the WHOIS lookup