module.exports = function () {
  const defaultParameters = {
    showAnimation: true,
    seed: Math.floor(Math.random() * Math.pow(2, 31)),
    nsweeps: 1000,
    n: 50,
    colorscale: [
      ['0.00', 'rgb(255,255,255)'],
      ['0.25', 'rgb(255,255,255)'],
      ['0.25', 'rgb(255,128,14)'],
      ['0.625', 'rgb(255,128,14)'],
      ['0.625', 'rgb(0,107,164)'],
      ['1.00', 'rgb(0,107,164)']
    ],
    heatmapID: 'schellingModel',
    frameDelay: 0,
    redrawFrames: true,
    tolerance: 0.5,
    agentRatio: 0.5,
    fractionEmpty: 0.1
  };
  defaultParameters.numberSites = Math.pow(defaultParameters.n, 2);

  return defaultParameters;
};
