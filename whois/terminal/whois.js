const whois = require('whois-json'); // Require the whois-json package

async function performWHOISLookup(domain) {
    try {
        const result = await whois(domain); // Perform the WHOIS lookup
        console.log("WHOIS Lookup Result for " + domain + ":");
        console.log(result);
    } catch (error) {
        console.error("Error performing WHOIS lookup:", error);
    }
}

const domainName = "zerohedge.com"; // Replace with the domain name you want to lookup
performWHOISLookup(domainName); // Initiate the WHOIS lookup