'use strict';
(function() {
	var templateSlide = document.getElementById('template-slide').innerHTML;
	var mainCarousel = document.querySelector('.main-carousel');
	Mustache.parse(templateSlide);
	var listItems = '';
	for (var i = 0; i < slidesData.length; i++) {
		listItems += Mustache.render(templateSlide, slidesData[i]);
	}
	mainCarousel.insertAdjacentHTML('beforeend', listItems);
	var elem = document.querySelector('.main-carousel');
	var flkty = new Flickity(elem, {
		// options
		cellAlign: 'left',
		contain: true,
		pageDots: false,
		hash: true,
	});
	var progressBar = document.querySelector('.progress-bar');
	flkty.on('scroll', function(progress) {
		progress = Math.max(0, Math.min(1, progress));
		progressBar.style.width = progress * 100 + '%';
	});


	var restartButton = document.getElementById('button-restart');
	restartButton.addEventListener("click", function() {
		flkty.select(0);
	});

	var markerClicked = false;
	window.initMap = function() {
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 2,
			center: slidesData[0].coords
		});
		var marker = '';
		var markers = [];
		var addListener = function(i) {
			google.maps.event.addListener(markers[i], 'click', function() {
				markerClicked = true;
				flkty.select(i);
			});
		};
		for (var i = 0; i < slidesData.length; i++) {
			marker = new google.maps.Marker({
				position: slidesData[i].coords,
				map: map
			});
			markers.push(marker);
			addListener(i);
		}

		flkty.on('change', function(index){
			if (markerClicked == false) {
				map.panTo(slidesData[index].coords);
			}
			markerClicked = false;
		});
	};	

})();



  