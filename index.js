const express = require('express');
const cron = require('node-cron');
const fs = require('fs');

const app = express();
const port = 3000;

// Cron Jobs
let cronJobs = {};

// API Endpoints

// 1. Schedule a new cron job
app.post('/schedule', express.json(), (req, res) => {
    const { name, schedule } = req.body;
    let task = () => { console.log('Cron job task executed!'); }; // Default task

    // Allow custom task function
    if (req.body.task && typeof req.body.task === 'function') {
        task = req.body.task;
    }

    try {
        cronJobs[name] = cron.schedule(schedule, task);
        res.json({ message: 'Cron job scheduled successfully', name });
    } catch (error) {
        res.status(500).json({ error: 'Invalid cron schedule' });
    }
});

// 2. List active cron jobs
app.get('/list', (req, res) => {
    const jobList = Object.keys(cronJobs).map(name => ({ name, running: cronJobs[name].running }));
    res.json(jobList);
});

// 3. Stop a cron job
app.delete('/stop/:name', (req, res) => {
    const name = req.params.name;
    if (cronJobs[name]) {
        cronJobs[name].stop();
        delete cronJobs[name];
        res.json({ message: 'Cron job stopped successfully' });
    } else {
        res.status(404).json({ error: 'Cron job not found' });
    }
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
