// Create web server
// 1. Create an Express application
// 2. Define a route for get request
// 3. Create a response
// 4. Start the server

const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
    res.send('GET request to the homepage');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});