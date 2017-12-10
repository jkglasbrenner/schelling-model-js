// Use of toRecursiveAnim adapted from
// https://tkowal.wordpress.com/2014/09/07/functional-javascript-passing-additional-arguments-to-callback/

const animateHeatmap = require('./animateHeatmap');
const plotHeatmap = require('./plotHeatmap');
const initGrid = require('../simulation/initGrid');
const monteCarloSweep = require('../simulation/monteCarloSweep');

let requestID;
let startPause = document.getElementById('startPauseButton');
let resetButton = document.getElementById('resetButton');
let gridSize = document.getElementById('gridSize');
let fractionEmpty = document.getElementById('fractionEmpty');

const toRecursiveAnim = function ( callback, grid, parameters, agentMoveAlgorithm,
                                   rng ) {
  return function (ts) {
    callback( ts, grid, parameters, agentMoveAlgorithm, rng );
  };
};

const simulation = function( timestamp, grid, parameters, agentMoveAlgorithm,
                             rng ) {
  if (startPause.innerHTML === "Pause") {
    monteCarloSweep( grid, parameters, agentMoveAlgorithm, rng );
    animateHeatmap( grid, parameters );
    requestAnimationFrame( toRecursiveAnim( simulation, grid, parameters,
                                            agentMoveAlgorithm, rng ) );
  } else if ( resetButton.innerHTML === "Resetting" ) {
    parameters.n = gridSize.noUiSlider.get();
    parameters.numberSites = Math.pow(parameters.n, 2);
    parameters.fractionEmpty = fractionEmpty.noUiSlider.get();
    grid = initGrid( parameters, rng );
    resetButton.innerHTML = "Reset";
    plotHeatmap( grid, parameters );
    requestAnimationFrame( toRecursiveAnim( simulation, grid, parameters,
                                            agentMoveAlgorithm, rng ) );
  } else {
    requestAnimationFrame( toRecursiveAnim( simulation, grid, parameters,
                                            agentMoveAlgorithm, rng ) );
  }
};

module.exports = function ( grid, parameters, agentMoveAlgorithm, rng ) {
  requestAnimationFrame( toRecursiveAnim( simulation, grid, parameters,
                                          agentMoveAlgorithm, rng ) );
};
