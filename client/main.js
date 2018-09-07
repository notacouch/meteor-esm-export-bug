import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import './main.html';

Template.hello.onRendered(function helloOnRendered() {  
  
  // Create chart instance
  var chart = am4core.create("chartdiv", am4charts.XYChart);
  
  // Add data
  chart.data = [{
    "category": "Research & Development",
    "value": 90
  }, {
    "category": "Marketing",
    "value": 102
  }, {
    "category": "Distribution",
    "value": 1500
  }];
  
  // Create axes
  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "category";
  
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  
  // Create series
  var series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueY = "value";
  series.dataFields.categoryX = "category";
  series.name = "Sales";
  
  // Create scrollbars
  chart.scrollbarX = new am4core.Scrollbar();
  chart.scrollbarY = new am4core.Scrollbar();
  
});
