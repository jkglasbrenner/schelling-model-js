const Chance = require('chance');
const plotHeatmap = require('../visualization/plotHeatmap');
const initGrid = require('./initGrid');
const agentMoveAlgorithm = require('./agentMoveAlgorithm');
const monteCarloSweep = require('./monteCarloSweep');
const defaultParameters = require('./defaultParameters');
const animateSimulation = require('../visualization/animateSimulation');
const sliders = require('../controls/sliders');

let gridSize = document.getElementById('gridSize');
let fractionEmpty = document.getElementById('fractionEmpty');

module.exports = function () {
  sliders();
  let parameters = defaultParameters();
  parameters.n = gridSize.noUiSlider.get();
  parameters.numberSites = Math.pow(parameters.n, 2);
  parameters.fractionEmpty = fractionEmpty.noUiSlider.get();
  let rng = Chance( parameters.seed );
  let grid = initGrid( parameters, rng );
  if ( parameters.showAnimation ) {
    plotHeatmap( grid, parameters );
    animateSimulation( grid, parameters, agentMoveAlgorithm, rng );
  } else {
    let sweep = 0;
    while ( sweep < parameters.nsweeps ) {
      monteCarloSweep( grid, parameters, agentMoveAlgorithm, rng );
      sweep++;
    }
  }
};
