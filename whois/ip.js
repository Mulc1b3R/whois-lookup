const fs = require('fs');
const dns = require('dns');

function getIPAddress(domain) {
    dns.lookup(domain, (err, address) => {
        if (err) {
            console.error(`Error fetching IP address for ${domain}:`, err);
            return;
        }

        const ipData = { domain, ip: address };
        const outputDir = './output';
        const outputFile = 'ip.json';

        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir); // Create the 'output' directory if it doesn't exist
        }

        const outputPath = `${outputDir}/${outputFile}`;
        fs.writeFileSync(outputPath, JSON.stringify(ipData, null, 2)); // Write the IP data to the 'ip.json' file

        console.log(`IP Address of ${domain} saved to ${outputPath}`);
    });
}

const domainName = "zerohedge.com"; // Replace with the domain name you want to fetch the IP address for
getIPAddress(domainName); // Call the function to get the IP address of the domain