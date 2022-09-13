const ctx = document.getElementById('myChart1').getContext('2d');
const myChart1 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#775da6'
            ],
            borderColor: [
                '#775da6'
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
              display: false
            },
          },
        scales: {
            x: {
              grid: {
                display: false,
              }
            },
            y: {
              grid: {
                 display: false,
              },
            }
          }
    }
});

//

const ctx2 = document.getElementById('myChart2').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#abdfe7'
            ],
            borderColor: [
                '#abdfe7'
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
              display: false
            },
          },
        scales: {
            x: {
              grid: {
                display: false,
              }
            },
            y: {
              grid: {
                 display: false,
              },
            }
          }
    }
});

//

const ctx3 = document.getElementById('myChart3').getContext('2d');
const myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            fill: 'origin',
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                "#eeebf4"
            ],
            borderColor: [
                "#775da6"
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
              display: false
            },
          },
        scales: {
            x: {
              grid: {
                display: false,
              }
            },
            y: {
              grid: {
                 display: false,
              },
            }
          }
    }
});

//

const ctx4 = document.getElementById('myChart4').getContext('2d');
const myChart4 = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            fill: 'origin',
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                "#edf6f7"
            ],
            borderColor: [
                "#70b6c1"
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
              display: false
            },
          },
        scales: {
            x: {
              grid: {
                display: false,
              }
            },
            y: {
              grid: {
                 display: false,
              },
            }
          }
    }
});

//

const ctx5 = document.getElementById('myChart5').getContext('2d');
const myChart5 = new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#775da6'
            ],
            borderColor: [
                '#775da6'
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
              display: false
            },
          },
        scales: {
            x: {
              grid: {
                display: false,
              }
            },
            y: {
              grid: {
                 display: false,
              },
            }
          }
    }
});

//

const ctx6 = document.getElementById('myChart6').getContext('2d');
const myChart6 = new Chart(ctx6, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#abdfe7'
            ],
            borderColor: [
                '#abdfe7'
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
              display: false
            },
          },
        scales: {
            x: {
              grid: {
                display: false,
              }
            },
            y: {
              grid: {
                 display: false,
              },
            }
          }
    }
});