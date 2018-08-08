<template>
  <v-card class="primary">
    <v-card-actions>
        <v-btn icon><v-icon>money</v-icon></v-btn>
        <v-btn icon><v-icon>access_time</v-icon></v-btn>
        <v-btn icon><v-icon>widgets</v-icon></v-btn>
        <v-spacer></v-spacer>
        <v-btn flat>Realtime</v-btn>
        <v-btn flat>Pie chart</v-btn>
        <v-btn flat>Depth chart</v-btn>
      </v-card-actions>
      <div id="chartdiv"></div>
  </v-card>
</template>

<script>

require('../../node_modules/amstock3/amcharts/amcharts.js');
require('../../node_modules/amstock3/amcharts/serial.js');
require('../../node_modules/amstock3/amcharts/amstock.js');

const AmCharts = window.AmCharts

var chartData = [];

function generateChartData() {
	var firstDate = new Date();
	firstDate.setHours(0, 0, 0, 0);
	firstDate.setDate(firstDate.getDate() - 2000);

	for (var i = 0; i < 2000; i++) {
		var newDate = new Date(firstDate);

		newDate.setDate(newDate.getDate() + i);
		var open = Math.round(Math.random() * (30) + 100);
		var close = open + Math.round(Math.random() * (15) - Math.random() * 10);

		var low;
		if (open < close) {
			low = open - Math.round(Math.random() * 5);
		} else {
			low = close - Math.round(Math.random() * 5);
		}

		var high;
		if (open < close) {
			high = close + Math.round(Math.random() * 5);
		} else {
			high = open + Math.round(Math.random() * 5);
		}
		var volume = Math.round(Math.random() * (1000 + i)) + 100 + i;
		var value = Math.round(Math.random() * (30) + 100);

		chartData[i] = ({
			date: newDate,
			open: open,
			close: close,
			high: high,
			low: low,
			volume: volume,
			value: value
		});
	}
}

function createStockChart() {
	var chart = new AmCharts.AmStockChart();

	// DATASET //////////////////////////////////////////
	var dataSet = new AmCharts.DataSet();
	dataSet.fieldMappings = [
		{fromField: "open", toField: "open"},
		{fromField: "close", toField: "close"}, 
		{fromField: "high", toField: "high"},
		{fromField: "low", toField: "low"},
		{fromField: "volume", toField: "volume"},
		{fromField: "value", toField: "value"}
	];
	dataSet.color = "#7f8da9";
	dataSet.dataProvider = chartData;
	dataSet.title = "GHS Inflow";
	dataSet.categoryField = "date";

	var dataSet2 = new AmCharts.DataSet();
	dataSet2.fieldMappings = [{
		fromField: "value",
		toField: "value"
	}];
	dataSet2.color = "#fac314";
	dataSet2.dataProvider = chartData;
	dataSet2.compared = true;
	dataSet2.title = "GHS Outflow";
	dataSet2.categoryField = "date";

	chart.dataSets = [dataSet, dataSet2];

	// PANELS ///////////////////////////////////////////
	var stockPanel = new AmCharts.StockPanel();
	stockPanel.title = "Value";
	stockPanel.showCategoryAxis = false;
	stockPanel.percentHeight = 70;

	var valueAxis = new AmCharts.ValueAxis();
	valueAxis.dashLength = 5;
	stockPanel.addValueAxis(valueAxis);

	stockPanel.categoryAxis.dashLength = 5;

	// graph of first stock panel
	var graph = new AmCharts.StockGraph();
	graph.type = "candlestick";
	graph.openField = "open";
	graph.closeField = "close";
	graph.highField = "high";
	graph.lowField = "low";
	graph.valueField = "close";
	graph.lineColor = "#7f8da9";
	graph.fillColors = "#7f8da9";
	graph.negativeLineColor = "#db4c3c";
	graph.negativeFillColors = "#db4c3c";
	graph.proCandlesticks = true;
	graph.fillAlphas = 1;
	graph.useDataSetColors = false;
	graph.comparable = true;
	graph.compareField = "value";
	graph.showBalloon = false;
	stockPanel.addStockGraph(graph);

	var stockLegend = new AmCharts.StockLegend();
	stockLegend.valueTextRegular = undefined;
	stockLegend.periodValueTextComparing = "[[percents.value.close]]%";
	stockPanel.stockLegend = stockLegend;

	var chartCursor = new AmCharts.ChartCursor();
	chartCursor.valueLineEnabled = true;
	chartCursor.valueLineAxis = valueAxis;
	stockPanel.chartCursor = chartCursor;

	var stockPanel2 = new AmCharts.StockPanel();
	stockPanel2.title = "Volume";
	stockPanel2.percentHeight = 30;
	stockPanel2.marginTop = 1;
	stockPanel2.showCategoryAxis = true;

	var valueAxis2 = new AmCharts.ValueAxis();
	valueAxis2.dashLength = 5;
	stockPanel2.addValueAxis(valueAxis2);

	stockPanel2.categoryAxis.dashLength = 5;

	var graph2 = new AmCharts.StockGraph();
	graph2.valueField = "volume";
	graph2.type = "column";
	graph2.showBalloon = false;
	graph2.fillAlphas = 1;
	stockPanel2.addStockGraph(graph2);

	var legend2 = new AmCharts.StockLegend();
	legend2.markerType = "none";
	legend2.markerSize = 0;
	legend2.labelText = "";
	legend2.periodValueTextRegular = "[[value.close]]";
	stockPanel2.stockLegend = legend2;

	var chartCursor2 = new AmCharts.ChartCursor();
	chartCursor2.valueLineEnabled = true;
	chartCursor2.valueLineAxis = valueAxis2;
	stockPanel2.chartCursor = chartCursor2;

	chart.panels = [stockPanel, stockPanel2];


	// OTHER SETTINGS ////////////////////////////////////
	var sbsettings = new AmCharts.ChartScrollbarSettings();
	sbsettings.graph = graph;
	sbsettings.graphType = "line";
	sbsettings.usePeriod = "WW";
	sbsettings.updateOnReleaseOnly = false;
	chart.chartScrollbarSettings = sbsettings;


	// PERIOD SELECTOR ///////////////////////////////////
	var periodSelector = new AmCharts.PeriodSelector();
	periodSelector.position = "bottom";
	periodSelector.periods = [{
		period: "DD",
		count: 10,
		label: "10 days"
	}, {
		period: "MM",
		selected: true,
		count: 1,
		label: "1 month"
	}, {
		period: "YYYY",
		count: 1,
		label: "1 year"
	}];
	chart.periodSelector = periodSelector;

	chart.write('chartdiv');
}



export default {
  name: 'GraphCard',
  props: {
    msg: String
  },

  mounted() {
    generateChartData();
    createStockChart();
  }
}
</script>


<style scoped>
#chartdiv {
  height: 400px;
}
</style>
