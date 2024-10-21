// const fs = require('fs');
// const axios = require('axios');
// const querystring = require('querystring');
// const express = require('express');
// const app = express();

// // Path to the config file
// const configFile = 'config.json';

// // Read and parse config file
// if (!fs.existsSync(configFile)) {
//     console.error('Config file not found.');
//     process.exit(1);
// }

// const configData = JSON.parse(fs.readFileSync(configFile));

// if (!configData) {
//     console.error('Error decoding JSON in config file.');
//     process.exit(1);
// }

// // Route to handle access token fetching
// app.get('/getAccessToken', async (req, res) => {
//     const code = req.query.code;
//     console.log(code);
    
//     if (!code) {
//         return res.status(400).send('Authorization code is missing.');
//     }

//     const data = {
//         client_id: configData.clientId,
//         client_secret: configData.clientSecret,
//         grant_type: 'authorization_code',
//         code: code,
//         user_type: 'Location'
//     };

//     try {
//         const response = await axios.post('https://services.leadconnectorhq.com/oauth/token', querystring.stringify(data), {
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             }
//         });

//         res.json(response.data); // Return the access token response
//         console.log(response.data);

//     } catch (error) {
//         console.error('Error fetching access token:', error.response ? error.response.data : error.message);
//         res.status(500).send('Failed to fetch access token.');
//     }
// });

// // Start the server
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
