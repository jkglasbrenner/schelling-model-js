const pickAgent = require('./pickAgent');
const monteCarloStep = require('./monteCarloStep');
const inspectNeighbors = require('./inspectNeighbors');

module.exports = function ( grid, parameters, agentMoveAlgorithm, rng ) {
  for (let step = 0; step < parameters.numberSites; step++) {
    monteCarloStep( grid, parameters, agentMoveAlgorithm, rng );
  }
};
