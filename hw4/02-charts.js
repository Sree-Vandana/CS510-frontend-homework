let backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
];

let borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
];

// URL to Game of Thrones API to fetch all characters
let url = 'https://thronesapi.com/api/v2/Characters';

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    donutGraph(data);
  })
  .catch((error) => {
      console.log(error);
  });


function donutGraph(data) {

  let arr = [];
  data.forEach(element => {

    let nam = element.family;
    if(nam == "" || nam == "None" || nam == "Unknown"){
      nam = "None";
    }
    else if(nam.indexOf("House") < 0){
      nam = "House " + nam;
    }
    if(nam != "House Free Folk") arr.push(nam)
  });

  let familyNames = arr.reduce((accu, curr) => {
    accu.hasOwnProperty(curr)
      ? accu[curr]++
      : (accu[curr] = 1);
    return accu;
  }, {});

  let familyLabels = [];
  let familyCount = [];
  for (const property in familyNames) {
    if (familyNames[property] >= 2) {
      familyLabels.push(property);
      familyCount.push(familyNames[property]);
    }
  }

  var ctx = document.getElementById('myChart').getContext('2d');

  var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: familyLabels,
        datasets: [{
                      data: familyCount,
                      backgroundColor: backgroundColors,
                      borderColor: borderColors,
                }],
      },
  });

}

