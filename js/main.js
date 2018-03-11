var circ = document.querySelectorAll('.circle');
var circBlock = document.querySelector('.char-block');
var back = document.getElementById('back');
var forward = document.getElementById('forward');
var img = [];

img[0] = "img/boy.png";
img[1] = "img/boy_happy.png";

for (var i = 0; i <= 2; i++) {
	var random = Math.round(Math.random() * 1.5);
	circ[i].innerHTML = '<img class="img" src=' + '"' + img[random] + '"' + '>';
}

/* Forward button */

$('#forward').on('click', function() {
	$('.circle:last-child').animate({
			opacity: '0',
			left: '600px',
			marginLeft: '183px'
	}, 0, function() {
		$(this).css({
			transform: 'scale(2, 2)',
		});
	});
	setTimeout(function() {
		var random = Math.round(Math.random() * 1.5);
		$('<div class="circle"><img class="img" src=' + '"' + img[random] + '"' + '></div>').prependTo($('.char-block'));
		$('.circle:first-child').css({
			opacity: '0',
			left: '-400px',
			transform: 'scale(2, 2)',
			marginRight: '0'
		});
		$('.circle:first-child').animate({
			opacity: '1',
			left: '0',
			marginRight: '30px'
		}, 0, function() {
			$(this).css({
				transform: 'scale(1, 1)'
			});
		});
	}, 80);
	setTimeout(function() {
		$('.circle:last-child').remove();
	}, 400);
});

/* Back button */

$('#back').on('click', function() {
	$('.circle:first-child').animate({
			opacity: '0',
			left: '-600px',
			marginRight: '-183px'
	}, 0, function() {
		$(this).css({
			transform: 'scale(2, 2)',
		});
	});
	setTimeout(function() {
		var random = Math.round(Math.random() * 1.5);
		$('<div class="circle"><img class="img" src=' + '"' + img[random] + '"' + '></div>').appendTo($('.char-block'));
		$('.circle:last-child').css({
			opacity: '0',
			left: '400px',
			transform: 'scale(2, 2)',
			marginLeft: '0'
		});
		$('.circle:last-child').animate({
			opacity: '1',
			left: '0',
			marginLeft: '30px'
		}, 0, function() {
			$(this).css({
				transform: 'scale(1, 1)'
			});
		});
	}, 80);
	setTimeout(function() {
		$('.circle:first-child').remove();
	}, 400);
});
