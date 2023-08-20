// your_script.js
document.addEventListener("DOMContentLoaded", function() {
    // ข้อมูลของกราฟ
    var data = {
      labels: ['ปี1 เทอม 1', 'ปี1 เทอม 2', 'ปี2 เทอม 1'],
      datasets: [{
        label: "Sample Data",
        data: [3.03,2.85,2.85],
        borderColor: "blue",
        fill: false
      }]
    };
  
    // ตั้งค่าต่าง ๆ ของกราฟ
    var options = {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: "Line Chart Example"
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "ปี,เทอม"
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "เกรด"
          }
        }
      }
    };
  
    // สร้างกราฟเส้น
    var ctx = document.getElementById("lineChart").getContext("2d");
    var lineChart = new Chart(ctx, {
      type: "line",
      data: data,
      options: options
    });
  });
  