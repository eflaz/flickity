var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  hash: true,
});

/*var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelectorAll('.button');
buttons = fizzyUIUtils.makeArray( buttons );

buttonGroup.addEventListener( 'click', function( event ) {
  // filter for button clicks
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var index = buttons.indexOf( event.target );
  flkty.select( index );*/



function putResetButtons(){
  var slides = document.querySelectorAll('.carousel-cell');
  var buttonHtml = '<button class="button">RESTART</button>';
  for (var i = 0; i < slides.length; i++) {
  	slides[i].innerHTML = buttonHtml + slides[i].innerHTML;
  }
}

function setResetActionForButtons() {
	var buttons = document.querySelectorAll('.button');
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function(event) {
	  	flkty.select(0, true, false);
		});
	}
}

putResetButtons();
setResetActionForButtons();