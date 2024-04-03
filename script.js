// This code was provided as part of a blog post, so there was no way to improve it directly. However, here's a slightly better approach to achieving the same result.

let is24HourFormat = true;

document.getElementById('toggle-format').addEventListener('click', function() {
    is24HourFormat = !is24HourFormat;
    this.textContent = is24HourFormat ? 'Switch to 12-hour Format' : 'Switch to 24-hour Format';
    updateClock();
});

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const dayOfWeek = now.toLocaleString('en-us', { weekday: 'long' });
    
    if (!is24HourFormat) {
        hours = hours % 12 || 12;
    }

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('date-display').textContent = `${day}/${month}/${year}`;
    document.getElementById('day-display').textContent = dayOfWeek;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to display clock immediately
