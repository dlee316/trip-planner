const mapboxgl = require('mapbox-gl');

function buildMarker(type, coordinates) {
  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  let markerStyle;

  if (type === 'activity') {
    markerStyle = 'url(http://i.imgur.com/WbMOfMl.png)';
  } else if (type === 'hotel') {
    markerStyle = 'url(http://i.imgur.com/D9574Cu.png)';
  } else if (type === 'restaurant') {
    markerStyle = 'url(http://i.imgur.com/cqR6pUI.png)';
  }

  markerDomEl.style.backgroundImage = markerStyle;

  return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);
}

module.exports = buildMarker;
