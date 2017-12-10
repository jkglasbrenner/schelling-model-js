const gridNeighbors = require('./gridNeighbors');

module.exports = function ( grid, i, j, parameters ) {
  let isNeighborAgent;
  let isNeighborSame;
  let neighborState;
  let indicesGridNeighbors = gridNeighbors( i, j, parameters.n );
  let agentState = grid[ i ][ j ];
  let sumLikeNeighbors = 0;
  let sumNeighbors = 0;

  for ( let index of indicesGridNeighbors ) {
    neighborState = grid[ index[ 0 ] ][ index[ 1 ] ];
    isNeighborAgent = neighborState !== 0;
    isNeighborSame = neighborState === agentState;
    if ( isNeighborSame ) {
      sumLikeNeighbors += 1;
      sumNeighbors += 1;
    } else if ( isNeighborAgent ) {
      sumNeighbors += 1;
    }
  }

  let neighbors = {
    "same": sumLikeNeighbors,
    "total": sumNeighbors
  };

  return neighbors;
};
