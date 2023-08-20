document.addEventListener("DOMContentLoaded", function() {
    // ข้อมูลของกราฟ
    var data = {
      labels: ['รร.วัดต้นสน','รร.สุวรรณรังสฤษฏ์วิทยาลัย', 'รร.คงคาราม', 'มหาวิทยาลัยแม่โจ้'],
      datasets: [{
        label: "จำนวนปีที่เรียน",
        data: [6, 3, 6,2],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1
      }]
    };
  
    // ตั้งค่าต่าง ๆ ของกราฟ
    var options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Number of Visitors"
          }
        }
      }
    };
  
    // สร้างกราฟแท่ง
    var ctx = document.getElementById("tourismChart").getContext("2d");
    var tourismChart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: options
    });
  })