const fs = require('fs');
const querystring = require('querystring');
const express = require('express');
const app = express();

// Path to the config file
const configFile = 'config.json';

// Read and parse config file
if (!fs.existsSync(configFile)) {
    console.error('Config file not found.');
    process.exit(1);
}

const configData = JSON.parse(fs.readFileSync(configFile));

if (!configData) {
    console.error('Error decoding JSON in config file.');
    process.exit(1);
}

// Route to handle app data and redirect to OAuth
app.get('/getAppData', (req, res) => {
    const options = {
        requestType: 'code',
        redirectUri: 'http://localhost:3000/getAccessToken',
        clientId: configData.clientId,
        scopes: [
            'contacts.readonly',
            'contacts.write',
           
        ]
    };

    const redirectUrl = `${configData.baseUrl}/oauth/chooselocation?${querystring.stringify({
        response_type: options.requestType,
        redirect_uri: options.redirectUri,
        client_id: options.clientId,
        scope: options.scopes.join(' ')
    })}`;

    // Redirect the user to the OAuth consent page
    res.redirect(redirectUrl);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
