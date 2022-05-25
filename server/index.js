const express = require("express");
require('dotenv').config()

const PORT = process.env.PORT || 3001;

const app = express();

// 1) Get the workers
// 2) Get the days of the month
// 3) Get the days that a worker wants off
// 4) Get the custom shifts that a workers wants (3 shifts in total)
// 5) Check the possibilites for the days off and the shifts
app.get("/schedule", (req, res) => {
    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }

    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;

    // 👇️ Current Month
    const thisMonth = getDaysInMonth(currentYear, currentMonth);
    console.log(thisMonth);
    // shift stands for the current shift of the worker (shift 0 stands for day off) || REQUIRED
    // workDays stands for how many workdays the worker already has for example the workers get a day off once in 3 days || REQUIRED
    // daysOff stands for the days that the worker preffers off (Max 1 day/) || OPTIONAL
    let workers = [{
        "name": "Grainger",
        "shift": 3,
        "workDays": 3,
        "daysOff": [15]
    },
    {
        "name": "Grrrrrrr",
        "shift": 1,
        "workDays": 2,
        "daysOff": [23]
    },
    {
        "name": "Idk",
        "shift": 2,
        "workDays": 1,
        "daysOff": [6]
    },
    {
        "name": "Hasbulla",
        "shift": 0,
        "workDays": 0,
        "daysOff": [18]
    }
    ]
    workers.sort((a, b) => (b.workDays) - (a.workDays));
     leShift = []
    function shifts(){
    for (let i = 0; i < 4; i++){
        workers[i].shift = i
        leShift.push(workers[i].name + "'s shift for tomorrow: " + workers[i].shift)
    }}
    console.log(leShift)
    res.json({
    message: leShift
});
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});