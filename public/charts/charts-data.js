const labels = ["Laki-Laki", "Perempuan"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: [
        "rgb(165,42,42)",
        "rgb(139,0,0)",
        "rgb(255, 205, 86)",
      ],

      data: [2, 2],
      hoverOffset: 4,
    },
  ],
};

const config = {
  type: "pie",
  data: data,
  options: {
    plugins:{
      title:{
        display: true,
        text: 'Custom Chart Title'
      }
    }
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);