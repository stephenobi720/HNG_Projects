const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/get_info', (req, res) => {
    const { slack_name, track } =req.query;

    // for my name
    const myName = slack_name || 'Stephen441';
    const myTrack = track || 'backend'; 

    // to get the current day and time 
    const currentDayOfWeek = new Date().toLocaleDateString('en-US', { weekday: 'long'});
    const currentUtcTime = new Date().toISOString();

    // For github urls
    const githubUrlFile = 'https://github.com/stephenobi720/HNG_Projects/blob/main/stage_1/app.js';
    const githubUrlRepo = 'https://github.com/stephenobi720/HNG_Projects/';

    // response
    const response = {
        'Slack name': myName,
        'Current day of the week': currentDayOfWeek,
        'Current UTC time': currentUtcTime,
        'Track': myTrack,
        'Github File URL': githubUrlFile,
        'Github Repo URL': githubUrlRepo,
        'Status code': 200,
    };

    res.json(response);
});

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
