module.exports = function ( grid, n, rng ) {
  let gridCell;
  let isAgent;
  let agentSitesIndices = [];
  for ( let i = 0; i < n; i++ ) {
    for ( let j = 0; j < n; j++ ) {
      gridCell = grid[i][j];
      isAgent = gridCell !== 0;
      if ( isAgent ) {
        agentSitesIndices.push( [ i, j ] );
      }
    }
  }
  let agentIndices = rng.pickone( agentSitesIndices );
  let i = agentIndices[ 0 ];
  let j = agentIndices[ 1 ];

  return [i, j];
};
