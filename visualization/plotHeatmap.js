module.exports = function ( grid, parameters ) {
  let data = [
    {
      z: grid,
      type: 'heatmap',
      colorscale: parameters.colorscale,
      zmin: 0,
      zmax: 2
    }
  ];
  Plotly.newPlot( parameters.heatmapID, data );
};
