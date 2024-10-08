let income;

document.addEventListener("DOMContentLoaded", () => {
  var incomeId = document.querySelector("#all-income").innerHTML;
  let incomeObj = JSON.parse(JSON.parse(incomeId));
  income = incomeObj
    .map((i) => parseFloat(i["fields"]["income"]))
    .reduce((acc, curr) => acc + curr);

  document.querySelector("#json").innerHTML = income;
});
// Create the Donut chart
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["income", income],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ]);

  var options = {
    title: "My Daily Activities",
    is3D: false,
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart"),
  );

  chart.draw(data, options);
}
