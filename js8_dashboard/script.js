const moment = require('moment');
const chart = require('chart.js');
const animated = require('./node_modules/animated-numbers/dist/animated-numbers.js');

const data = {
    tasks: [
        {
            name: "Go to the gym",
            date: "2022-03-14",
            priority: 5,
            status: true
        },
        {
            name: "Meeting with client",
            date: "2022-03-14",
            priority: 8,
            status: true
        },
        {
            name: "Read materials for homework",
            date: "2022-03-14",
            priority: 6,
            status: true
        },
        {
            name: "Do test",
            date: "2022-03-14",
            priority: 5,
            status: false
        },
        {
            name: "Go to the pool",
            date: "2022-03-15",
            priority: 5,
            status: false
        },
        {
            name: "Go to the salon",
            date: "2022-03-15",
            priority: 3,
            status: true
        },
        {
            name: "Run advertasing campaigns",
            date: "2022-03-15",
            priority: 10,
            status: true
        },
        {
            name: "Go to the gym",
            date: "2022-03-16",
            priority: 5,
            status: false
        },
        {
            name: "Pack for the road",
            date: "2022-03-16",
            priority: 9,
            status: true
        },
        {
            name: "Issue bills",
            date: "2022-03-16",
            priority: 7,
            status: true
        },
        {
            name: "Clean up",
            date: "2022-03-16",
            priority: 6,
            status: true
        },
        {
            name: "Go to Murmansk",
            date: "2022-03-17",
            priority: 10,
            status: true
        },
        {
            name: "Issue bills",
            date: "2022-03-17",
            priority: 4,
            status: false
        },
        {
            name: "Call to gym",
            date: "2022-03-17",
            priority: 2,
            status: false
        },
        {
            name: "English class",
            date: "2022-03-17",
            priority: 7,
            status: true
        },
        {
            name: "Do JS practical task",
            date: "2022-03-18",
            priority: 8,
            status: true
        },
        {
            name: "Issue bills",
            date: "2022-03-18",
            priority: 5,
            status: true
        },
        {
            name: "Go to Kirovsk",
            date: "2022-03-19",
            priority: 8,
            status: false
        },
        {
            name: "Rent equipment",
            date: "2022-03-19",
            priority: 8,
            status: false
        },
        {
            name: "Meetinf IT GIRLS",
            date: "2022-03-19",
            priority: 7,
            status: false
        },
        {
            name: "Pay for the course",
            date: "2022-03-20",
            priority: 10,
            status: true
        },
        {
            name: "Edit menu",
            date: "2022-03-20",
            priority: 4,
            status: false
        }
    ]
}

const dates = data.tasks.map((task) => task.date)
const unicDates = dates.filter((date, i) => dates.indexOf(date) === i);
const textDates = unicDates.map((date) => moment(date).format('dddd'))
const amountTasks = data.tasks.reduce(function(accumulator, task) {
    const day = moment(task.date).format('dddd')
    if (accumulator[day]) {
        accumulator[day] += 1;
    } else {
        accumulator[day] = 1;
    }
    return accumulator;
}, {});

const doneTasks = data.tasks.reduce(function(accumulator, task) {
    const day = moment(task.date).format('dddd');

    if (!accumulator[day]) {
        accumulator[day] = {
            true: 0,
            false: 0
        };
    }

    accumulator[day][task.status] += 1
    return accumulator;
}, {});

const weekCanvas = document.getElementById("weekChart");
const doneCanvas = document.getElementById("doneChart");

const lineChart = new Chart(weekCanvas, {
    type: 'line',
    data: {
        datasets: [{
        label: "Weekly Activity",
          data: amountTasks,
          fill: true,
          borderColor: 'rgb(75, 192, 192)',
          pointStyle: 'circle',
      pointRadius: 10,
      pointHoverRadius: 15
        }]
      },
      options: {
      scales: {
        y: { 
          min: 0,
          max: 6
        }
      }
}});

const mixedChart = new Chart(doneCanvas, {
    data: {
        datasets: [{
            type: 'bar',
            label: 'Done',
            data: Object.values(doneTasks).map((item) => item.true),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)'
        }, {
            type: 'bar',
            label: 'In process',
            data: Object.values(doneTasks).map((item) => item.false),
            borderColor: 'rgb(54, 162, 235)'
        }],
        labels: Object.keys(doneTasks)
    },
    options: {
        ticks: {
            min: 0,
            stepSize: 1,
            max: 5
          },
        scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true
            }
          }
    }
});

const textAllTasks = document.getElementById('textAllTasks');
textAllTasks.textContent = `${data.tasks.length}`;

const textDoneTasks = document.getElementById('textDoneTasks');
textDoneTasks.textContent = `${Object.values(doneTasks).reduce((accumulator, task) => accumulator + task.true, 0)}`;

const textNotDoneTasks = document.getElementById('textNotDoneTasks');
textNotDoneTasks.textContent = `${Object.values(doneTasks).reduce((accumulator, task) => accumulator + task.false, 0)}`;