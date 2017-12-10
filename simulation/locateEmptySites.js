module.exports = function ( grid, n ) {
  let gridCell;
  let isEmpty;
  let emptySitesIndices = [];
  for ( let i = 0; i < n; i++ ) {
    for ( let j = 0; j < n; j++ ) {
      gridCell = grid[i][j];
      isEmpty = gridCell === 0;
      if ( isEmpty ) {
        emptySitesIndices.push( [ i, j ] );
      }
    }
  }

  return emptySitesIndices;
};
