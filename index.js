// const barsBody = document.body.querySelectorAll('.bars');
const currentDayBar = document.body.querySelectorAll('.bar');
const week = document.body.querySelectorAll('.day');
const dailyExpenseValue = document.body.querySelectorAll('.per-day-expense');
const theme = document.getElementById("bgToggle");
// const bodyChart = document.getElementById('main');
const flexHeight = 180;

const jsonData = fetch('data.json')
    .then((response) => response.json())
    .then((json) => {
        return json;
    });

theme.addEventListener('click', function () {
    document.body.classList.toggle('bg-change');
    })

const weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const d = new Date().getDay();


for (let i = 0; i < week.length; i++) {

    const foundData = async () => {
        let data = await jsonData;
        // console.log(data[i].amount);
        dailyExpenseValue[i].textContent = "₹" + data[i].amount;
        currentDayBar[i].style.height = (flexHeight * data[i].amount)/100 + "px";
    }

    foundData();

    const today = week[i].textContent;
    if (weekdays[d] == today) {
        currentDayBar[i].classList.add('cyan-bar');
    }
    // console.log(today);
}






// console.log(currentDayBar);
// console.log(week);
// console.log(weekdays[d]);
// console.log(dailyExpenseValue);