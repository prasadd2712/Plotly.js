(async function(){

    TESTER = document.getElementById('tester');
    Plotly.newPlot( TESTER, [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] }], {
    margin: { t: 0 } } );

    

    // var trace1 = {
    //     x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    //     y: [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17],
    //     type: 'bar',
    //     name: 'Primary Product',
    //     marker: {
    //       color: 'rgb(49,130,189)',
    //       opacity: 0.7,
    //     }
    //   };
      
    //   var trace2 = {
    //     x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    //     y: [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16],
    //     type: 'bar',
    //     name: 'Secondary Product',
    //     marker: {
    //       color: 'rgb(204,204,204)',
    //       opacity: 0.5
    //     }
    //   };
      
    //   var data = [trace1, trace2];
      
    //   var layout = {
    //     title: '2013 Sales Report',
    //     xaxis: {
    //       tickangle: -45
    //     },
    //     barmode: 'group'
    //   };
      
    //   Plotly.newPlot('myDiv', data, layout);
    // TESTER = document.getElementById('tester');
    // Plotly.newPlot( TESTER,data,layout);
})();