const express = require('express');
const app = express();

app.use(express.json());

// Logger middleware
app.use((request, response, next) => {
    console.log(`[WEATHER] ${request.method} ${request.url} at ${new Date().toISOString()}`);
    next();
});


app.get('/', (request, response) => {
    response.json({
        "message": "Hello World!"
    });
});

module.exports = app;
