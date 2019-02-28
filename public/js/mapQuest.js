function initMap() {
	// add your code here
	L.mapquest.key = 'aej1DxtITp7ez5ZN8yuLhJAasOoz5k5e';

	var map = L.mapquest.map('map', {
		center: [32.8794042,-117.2353702],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.8794042,-117.2353702]).addTo(map);
}