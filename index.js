const cron = require('node-cron');
const express = require('express');
let nodemailer = require("nodemailer");

app = express();
const port = 3000;

// create mail transporter
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your_email@gmail.com',
        pass: 'your_password'
    }
});

// Send mail every day at 01 AM.

cron.schedule("* 01 * * *", function () {
    let mailOptions = {
        from: "support@gmail.com",
        to: "any_user_mail@gmail.com",
        subject: `Cron job ;)`,
        text: `Hi there, this email was automatically sent by node cron`
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            throw error;
        } else {
            console.log("Email successfully sent by cron!");
        }
    });
});

// schedule tasks to be run on the server
cron.schedule("* * * * *", function () {
    console.log("Running a task every minute");
    console.log("Email successfully sent by cron!");

});

// schedule tasks to be run on the server
cron.schedule("*/2 * * * *", function () {
    console.log("running a task every two minute");
});


// schedule tasks to be run on the server
cron.schedule("* * * * wednesday", function () {
    console.log("running a task every wednesday");
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
