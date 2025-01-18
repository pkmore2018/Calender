const monthNameElement = document.querySelector('.month-name');
const daysElement = document.querySelector('.days');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentDate = new Date();

function renderCalendar(date) {
    const month = date.getMonth();
    const year = date.getFullYear();
    
    // Get first day of the month and number of days in the month
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const numberOfDays = lastDay.getDate();
    
    // Get the day of the week for the first day of the month
    const firstDayWeekday = firstDay.getDay();

    // Set the month name
    monthNameElement.textContent = `${firstDay.toLocaleString('default', { month: 'long' })} ${year}`;

    // Clear previous days
    daysElement.innerHTML = '';

    // Add empty divs for the days before the first day of the month
    for (let i = 0; i < firstDayWeekday; i++) {
        const emptyDiv = document.createElement('div');
        emptyDiv.classList.add('day-item', 'empty');
        daysElement.appendChild(emptyDiv);
    }

    // Add the actual days of the month
    for (let day = 1; day <= numberOfDays; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day-item');
        dayDiv.textContent = day;
        daysElement.appendChild(dayDiv);
    }
}

function goToPrevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
}

function goToNextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
}

// Initial render
renderCalendar(currentDate);

// Event listeners for navigation buttons
prevButton.addEventListener('click', goToPrevMonth);
nextButton.addEventListener('click', goToNextMonth);

