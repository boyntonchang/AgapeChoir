// JavaScript Document
/*var memberControllers = angular.module('memberControllers', ['highcharts-ng']);*/

angular.module('app').controller('statsCtrl', function ($scope,mvIdentity, mvAuth, mvUser) {
			$scope.identity = mvIdentity;
/*  $scope.chartTypes = [
    {"id": "line", "title": "Line"},
    {"id": "spline", "title": "Smooth line"},
    {"id": "area", "title": "Area"},
    {"id": "areaspline", "title": "Smooth area"},
    {"id": "column", "title": "Column"},
    {"id": "bar", "title": "Bar"},
    {"id": "pie", "title": "Pie"},
    {"id": "scatter", "title": "Scatter"}
  ];

  $scope.dashStyles = [
    {"id": "Solid", "title": "Solid"},
    {"id": "ShortDash", "title": "ShortDash"},
    {"id": "ShortDot", "title": "ShortDot"},
    {"id": "ShortDashDot", "title": "ShortDashDot"},
    {"id": "ShortDashDotDot", "title": "ShortDashDotDot"},
    {"id": "Dot", "title": "Dot"},
    {"id": "Dash", "title": "Dash"},
    {"id": "LongDash", "title": "LongDash"},
    {"id": "DashDot", "title": "DashDot"},
    {"id": "LongDashDot", "title": "LongDashDot"},
    {"id": "LongDashDotDot", "title": "LongDashDotDot"}
  ];*/

  $scope.chartSeries = [
	{"name":"soprano", "data":[13,15,24,22,18,17,19,20,17,17,20]},
	{"name":"alto", "data":[11,14,15,15,12,11,16,12,13,14,15]},
	{"name":"tenor", "data":[7,12,13,12,15,15,11,10,12,14,15]},
	{"name":"bass", "data":[15,16,16,13,12,15,16,17,17,14,17]}
];

  $scope.chartSeries2 = [{
	 	data:[
               
              ['Soprano', 15],
			  ['Alto', 12],
			  ['Tenor', 11],
			  ['Bass', 16]
				
				]
  }
];
 $scope.chartSeries3 = [{"name":"person", "data":[2,6,15,26,19,4]}
];
 $scope.chartSeries4 = [{
	 	data:[
               
                ['78%', 11]
				
				
				]
  }
];
 $scope.chartSeries5 = [{
	 	data:[
               
                ['76%', 16]
				
				
				]
  }
];


 /* $scope.chartStack = [
    {"id": '', "title": "No"},
    {"id": "normal", "title": "Normal"},
    {"id": "percent", "title": "Percent"}
  ];*/
/*
  $scope.addPoints = function () {
    var seriesArray = $scope.chartConfig.series;
    var rndIdx = Math.floor(Math.random() * seriesArray.length);
    seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
  };

  $scope.addSeries = function () {
    var rnd = []
    for (var i = 0; i < 10; i++) {
      rnd.push(Math.floor(Math.random() * 20) + 1)
    }
    $scope.chartConfig.series.push({
      data: rnd
    })
  }

  $scope.removeRandomSeries = function () {
    var seriesArray = $scope.chartConfig.series;
    var rndIdx = Math.floor(Math.random() * seriesArray.length);
    seriesArray.splice(rndIdx, 1)
  }

  $scope.removeSeries = function (id) {
    var seriesArray = $scope.chartConfig.series;
    seriesArray.splice(id, 1)
  }

  $scope.toggleHighCharts = function () {
    this.chartConfig.useHighStocks = !this.chartConfig.useHighStocks
  }

  $scope.replaceAllSeries = function () {
    var data = [
      { name: "first", data: [10] },
      { name: "second", data: [3] },
      { name: "third", data: [13] }
    ];
    $scope.chartConfig.series = data;
  };*/

  $scope.chartConfig = {
	  
    options: {
      chart: {
        type: 'line',
		backgroundColor:'rgba(255, 255, 255, 0.1)'
      },
      plotOptions: {
		  
        series: {
          stacking: ''
        },
		
      }
    },
    series: $scope.chartSeries,
    title: {
      text: 'ATTENDANCE'
    },
	xAxis:{
		min:0,
		categories: ['1 wk', '2 wk', '3 wk', '4 wk', '5 wk', '6 wk', '7 wk', '8 wk', '9 wk', '10 wk', '11 wk']
		
	},
	yAxis:{
		
		min:7,
		max:25,
		title: {
			text:'number of person'
		}
	},
	
    credits: {
      enabled: false
    },
    loading: false,
    size: {}
  }
  
  $scope.chartConfig2 = {
	  
    options: {
      chart: {
        type: 'pie',
		backgroundColor:'rgba(255, 255, 255, 0.1)'
		
      },
      plotOptions: {
        series: {
          stacking: ''
        },
		pie:{
			innerSize:160,
			
			
		}
      }
    },
    series: $scope.chartSeries2,
    title: {
      text: ' Last week'
    },
	

	
    credits: {
      enabled: false
    },
    loading: false,
    size: {}
  }
  $scope.chartConfig3 = {
	  
    options: {
      chart: {
        type: 'column',
		backgroundColor:'rgba(255, 255, 255, 0.1)'
		
      },
      plotOptions: {
        series: {
          stacking: ''
        }
	
      }
    },
    series: $scope.chartSeries3,
    title: {
      text: 'Age Distribution'
    },
	xAxis:{
		min:0,
		categories: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+']
		
	},
	yAxis:{
		
		
		title: {
			text:'number of person'
		}
	},
	
    credits: {
      enabled: false
    },
    loading: false,
    size: {}
  }
  
  $scope.chartConfig4= {
	  
    options: {
      chart: {
        type: 'pie',
		backgroundColor:'rgba(255, 255, 255, 0.1)'
		
      },
      plotOptions: {
        series: {
          stacking: ''
        },
		pie:{
			innerSize:160,
			
			endAngle:282,
			colors:['#f7a35c']
		}
      }
    },
    series: $scope.chartSeries4,
    title: {
      text: 'Tenor'
    },
	

	
    credits: {
      enabled: false
    },
    loading: false,
    size: {}
  }
  $scope.chartConfig5 = {
	  
    options: {
      chart: {
        type: 'pie',
		backgroundColor:'rgba(255, 255, 255, 0.1)'
		
      },
      plotOptions: {
        series: {
          stacking: ''
        },
		pie:{
			innerSize:160,
			
			endAngle:274,
			colors:['#90ed7d']
			
		}
      }
    },
    series: $scope.chartSeries5,
    title: {
      text: 'Bass'
    },
	

	
    credits: {
      enabled: false
    },
    loading: false,
    size: {}
  }



  $scope.reflow = function () {
    $scope.$broadcast('highchartsng.reflow');
  };



});

  