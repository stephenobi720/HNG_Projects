const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const { slack_name, track } =req.query;

    // to get the current day and time 
    const currentDayOfWeek = new Date().toLocaleDateString('en-US', { weekday: 'long'});
    const currentUtcTime = new Date().toISOString();

    // For github urls
    const githubUrlFile = '';
    const githubUrlRepo = '';

    // response
    const response = {
        'Slack name': slack_name,
        'Current day of the week': currentDayOfWeek,
        'Current UTC time': currentUtcTime,
        'Track': track,
        'Github File URL': githubUrlFile,
        'Github Repo URL': githubUrlRepo,
        'Status code': 200,
    };

    res.json(response);
});

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});