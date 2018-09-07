
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import './main.html';

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';


import App from '../imports/ui/App.js';

 

Meteor.startup(() => {

  render(<App />, document.getElementById('render-target'));
  
  // Create chart instance
  const chart = am4core.create("chartdiv", am4charts.XYChart);
  
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
  const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "category";
  
  const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  
  // Create series
  const series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueY = "value";
  series.dataFields.categoryX = "category";
  series.name = "Sales";
  
  // Create scrollbars
  chart.scrollbarX = new am4core.Scrollbar();
  chart.scrollbarY = new am4core.Scrollbar();

});
