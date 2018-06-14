'use strict';
(function(){
	var templateSlide = document.getElementById('template-slide').innerHTML;
	var mainCarousel = document.querySelector('.main-carousel');

	Mustache.parse(templateSlide);
	var listItems = '';
	for(var i = 0; i < slidesData.length; i++) {
			console.log(slidesData);
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

})();