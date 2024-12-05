const startDate = new Date("2016-05-16");
const hoursDaily = 2.7;

function Timer() {
    const now = new Date();
    const timeDiff = now - startDate;
    const daysPassed = timeDiff / (1000 * 60 * 60 * 24);
    const totalHours = (daysPassed * hoursDaily).toFixed(0);
    document.getElementById("gandevio_hours").textContent = totalHours;
}

setInterval(Timer, 1000);
Timer();