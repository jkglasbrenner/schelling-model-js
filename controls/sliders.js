const noUiSlider = require('nouislider');

module.exports = function () {
  let tolerance = document.getElementById('tolerance');
  let fractionEmpty = document.getElementById('fractionEmpty');
  let gridSize = document.getElementById('gridSize');
  let startPause = document.getElementById('startPauseButton');
  let resetButton = document.getElementById('resetButton');

  noUiSlider.create(tolerance, {
    start: 0.5,
    behavior: 'tap',
    orientation: "horizontal",
    connect: [true, false],
    range: {
      min: 0,
      max: 1
    }
  });

  noUiSlider.create(fractionEmpty, {
    start: 0.1,
    behavior: 'tap',
    orientation: "horizontal",
    connect: [true, false],
    range: {
      min: 0.01,
      max: 1
    }
  });

  noUiSlider.create(gridSize, {
    start: 30,
    step: 1,
    behavior: 'tap',
    orientation: "horizontal",
    connect: [true, false],
    range: {
      min: 10,
      max: 40
    }
  });

  tolerance.noUiSlider.on('update', function( values, handle ){
	toleranceValue.innerHTML = Math.round( values[ handle ] * 100 );
  });

  fractionEmpty.noUiSlider.on('update', function( values, handle ){
	fractionEmptyValue.innerHTML = Math.round( values[ handle ] * 100 );
  });

  gridSize.noUiSlider.on('update', function( values, handle ){
	gridSizeValue.innerHTML = Math.round( values[ handle ] );
  });

  startPause.addEventListener('click', function () {
    let currentValue = startPause.innerHTML;
    if (currentValue === "Start") {
      startPause.innerHTML = "Pause";
    } else {
      startPause.innerHTML = "Start";
    }
  });

  resetButton.addEventListener('click', function () {
    startPause.innerHTML = "Start";
    resetButton.innerHTML = "Resetting";
  });
};
