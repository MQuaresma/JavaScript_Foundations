var months = ["January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December"
            ];

function getMonth(monthNo){
    return months[monthNo-1];
}

console.log(getMonth(1));
console.log(getMonth(12));
console.log(getMonth(4));