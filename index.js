const express = require("express");
const cron = require("node-cron");
const fs = require("fs");

const app = express();
const port = 1337;

// TODO: Initialize an empty object to store scheduled cron jobs. Each cron job will be associated with a unique name (key) and its corresponding cron instance (value).

// API Endpoints

// 1. Schedule a New Cron Job
app.post("/schedule", express.json(), (req, res) => {
  // TODO: Extract job name and cron schedule expression from the request body.

  // TODO: Define a default task function that logs a message when executed.

  // TODO: Check if a custom task function is provided in the request body.
  // TODO: Ensure the provided 'task' is a valid JavaScript function.

  try {
    // TODO: Schedule the cron job using the 'cron' library and Store the cron instance in the 'cronJobs' object with the provided name as the key.
    // TODO: Respond with a success message and the name of the scheduled job.
  } catch (error) {
    // TODO: Handle invalid cron schedule expressions by responding with an error status and message.
  }
});

// 2. List Active Cron Jobs
app.get("/list", (req, res) => {
  // TODO: Create an array of objects, each containing the job name and its running status.
  // TODO: Respond with the list of active cron jobs.
});

// 3. Stop a Cron Job
app.delete("/stop/:name", (req, res) => {
  // TODO: Get the job name from the request parameters.
  // TODO: Check if a cron job with the given name exists.
    // TODO: Stop the cron job.
    // TODO: Remove the cron job from the 'cronJobs' object.
    // TODO: Respond with a success message.
    // TODO: Handle the case where the cron job is not found by responding with an error status and message.
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
