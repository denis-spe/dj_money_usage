document.addEventListener("DOMContentLoaded", () => {
  var income = document.querySelector("#all-income").innerHTML;

  console.log(JSON.parse(JSON.parse(income)))
  //document.write(str);
  document.querySelector("#json").innerHTML = JSON.parse(JSON.parse(income))[0][
    "fields"
  ]["income"];
});

async function simpleDonutChart(divElementId) {
  // #region ExampleA
  // Demonstrates how to create a pie chart with SciChart.js
  const {
    SciChartPieSurface,
    EPieType,
    SciChartJsNavyTheme,
    PieSegment,
    ELegendPlacement,
    ELegendOrientation,
    GradientParams,
    Point
  } = SciChart;

  // or, for npm, import { SciChartPieSurface, ... } from "scichart"

  // Create the Donut chart
  // Note: Code is the same as a pie chart, but we specify pieType and holeRadius
  const sciChartPieSurface = await SciChartPieSurface.create(divElementId, {
    theme: new SciChartJsNavyTheme(),
    pieType: EPieType.Donut,
    holeRadius: 0.6,
    animate: true,
  });

  // Additional legend options
  sciChartPieSurface.legend.showLegend = true;
  sciChartPieSurface.legend.showCheckboxes = true;
  sciChartPieSurface.legend.animate = true;
  sciChartPieSurface.legend.placement = ELegendPlacement.TopRight;
  sciChartPieSurface.legend.orientation = ELegendOrientation.Vertical;
  sciChartPieSurface.width = 233

  // Create pie segments with value, colour and text
  const pieSegment1 = new PieSegment({
    color: "#228B22",
    value: 40,
    text: "Green",
    colorLinearGradient: new GradientParams(new Point(0, 0), new Point(0, 1), [
      { color: "#1D976C", offset: 0 },
      { color: "#93F9B9", offset: 1 },
    ]),
  });
  const pieSegment2 = new PieSegment({
    value: 10,
    text: "Red",
    colorLinearGradient: new GradientParams(new Point(0, 0), new Point(0, 1), [
      { color: "#DD5E89", offset: 0 },
      { color: "#F7BB97", offset: 1 },
    ]),
  });
  const pieSegment3 = new PieSegment({
    value: 20,
    text: "Blue",
    colorLinearGradient: new GradientParams(new Point(0, 0), new Point(0, 1), [
      { color: "#1FA2FF", offset: 0 },
      { color: "#12D8FA", offset: 0.5 },
      { color: "#A6FFCB", offset: 1 },
    ]),
  });
  const pieSegment4 = new PieSegment({
    value: 15,
    text: "Yellow",
    colorLinearGradient: new GradientParams(new Point(0, 0), new Point(0, 1), [
      { color: "#F09819", offset: 0 },
      { color: "#EDDE5D", offset: 1 },
    ]),
  });
  sciChartPieSurface.pieSegments.add(pieSegment1, pieSegment2, pieSegment3, pieSegment4);
  // #endregion
};

simpleDonutChart("scichart-root");