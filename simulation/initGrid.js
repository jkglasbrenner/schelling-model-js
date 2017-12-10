module.exports = function ( parameters, rng ) {
  let grid2D = [];
  let gridRow = [];
  let gridStates1D = [];
  let n = parameters.n;
  let numberSites = parameters.numberSites;
  let fractionEmpty = parameters.fractionEmpty;
  let agentRatio = parameters.agentRatio;
  let numberEmptySites = Math.floor(fractionEmpty * numberSites);
  let numberAgents = numberSites - numberEmptySites;
  let numberAgentTypeOne = Math.floor(numberAgents * agentRatio);
  let numberAgentTypeTwo = numberAgents - numberAgentTypeOne;

  for ( let i = 0; i < numberEmptySites; i++ ) {
    gridStates1D.push( 0 );
  }
  for ( let i = 0; i < numberAgentTypeOne; i++ ) {
    gridStates1D.push( 1 );
  }
  for ( let i = 0; i < numberAgentTypeTwo; i++ ) {
    gridStates1D.push( 2 );
  }
  let shuffledGridStates1D = rng.shuffle(gridStates1D);

  for ( let i = 0; i < n; i++ ) {
    gridRow = [];
    for ( let j = 0; j < n; j++ ) {
      gridRow.push( shuffledGridStates1D.pop() );
    }
    grid2D.push( gridRow );
  }

  return grid2D;
};
