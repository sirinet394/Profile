const ctx5 = document.getElementById('doughnut');        
const doughnut =new Chart(ctx5, {
  type: 'doughnut',
  data: {
    labels: ['java', 'css', 'html','python'],
    datasets: [{
      label: 'Skills',
      data: [10,5,50,35],
      backgroundColor: [
        'rgb(89, 101, 110,0.9)',
        'rgb(203, 96, 53,0.9)',
        'rgb(120, 52, 134,0.9)',
        'rgb(250, 50, 99,0.9)'
      ],
      backgroundColor: [
        'rgb(89, 101, 101,0.9)',
        'rgb(203, 96, 53,0.9)',
        'rgb(120, 52, 134,0.9)',
        'rgb(250, 50, 99,0.9)'
      ],
      borderWidth: 4
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});