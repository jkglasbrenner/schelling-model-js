const noUiSlider = require('nouislider');
const locateEmptySites = require('./locateEmptySites');

module.exports = function ( grid, n, numberLikeNeighbors, numberNeighbors, rng ) {
  let emptySitesIndices;
  let moveAgentIndices;
  let tolerance = document.getElementById('tolerance');
  let isAgentMove = numberLikeNeighbors / numberNeighbors < tolerance.noUiSlider.get();
  if ( isAgentMove ) {
    emptySitesIndices = locateEmptySites( grid, n );
    moveAgentIndices = rng.pickone( emptySitesIndices );
    } else {
      moveAgentIndices = null;
    }

  let agentMove = {
    "decision": isAgentMove,
    "ij": moveAgentIndices
  };

  return agentMove;
};
