const express = require("express");
require('dotenv').config()

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }

    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;

    // 👇️ Current Month
    const thisMonth = getDaysInMonth(currentYear, currentMonth);
    console.log(thisMonth);
    let workers = [
        {
            "workerName": "Grainger",
            "shift": 3,
            "daysOff": [6,9]
        },
        {
            "workerName": "Grrrrrrr",
            "shift": 1,
            "daysOff": [6,9]
        },
        {
            "worker": "Idk",
            "shift": 2,
            "daysOff": [6,9]
        }
    ]
    workers.sort((a, b) => (a.shift) - (b.shift));
    console.log(workers)
    let month = thisMonth
    for (let i = 0; i < month; i++) {
    }
    res.json({ message: workers });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});