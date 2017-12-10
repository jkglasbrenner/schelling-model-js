const pickAgent = require('./pickAgent');
const inspectNeighbors = require('./inspectNeighbors');

module.exports = function ( grid, parameters, agentMoveAlgorithm, rng ) {
  let ij = pickAgent( grid, parameters.n, rng );
  let neighbors = inspectNeighbors( grid, ij[ 0 ], ij[ 1 ], parameters );
  let agentMove = agentMoveAlgorithm( grid, parameters.n, neighbors.same, neighbors.total, rng );
  if ( agentMove.decision ) {
    let agentState = grid[ ij[ 0 ] ][ ij[ 1 ] ];
    grid[ agentMove.ij[ 0 ] ][ agentMove.ij[ 1 ] ] = agentState;
    grid[ ij[ 0 ] ][ ij[ 1 ] ] = 0;
  }
};
