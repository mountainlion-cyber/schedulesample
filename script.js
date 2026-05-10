// script.js

// 1. Data structure for the schedule
const scheduleData = [
    { time: "08:05 - 09:47", mon: "Math", tue: "History", wed: "Math", thu: "History", fri: "Lab" },
    { time: "10:05 - 11:47", mon: "Physics", tue: "English", wed: "Physics", thu: "English", fri: "Library" },
    { time: "12:45 - 14:27", mon: "CS101", tue: "Art", wed: "CS101", thu: "Art", fri: "Study Hall" },
    { time: "14:40 - 16:35", mon: "Gym", tue: "Free", wed: "Gym", thu: "Club", fri: "Free" }
];

// 2. Function to render the schedule
function renderSchedule() {
    const tableBody = document.getElementById('schedule-body');
    
    scheduleData.forEach(slot => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td><strong>${slot.time}</strong></td>
            <td><span class="course-name">${slot.mon}</span></td>
            <td><span class="course-name">${slot.tue}</span></td>
            <td><span class="course-name">${slot.wed}</span></td>
            <td><span class="course-name">${slot.thu}</span></td>
            <td><span class="course-name">${slot.fri}</span></td>
        `;
        
        tableBody.appendChild(row);
    });
}

// 3. Initialize the table on load
window.onload = renderSchedule;
