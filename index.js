document.querySelectorAll('.drum').forEach(function(btn) {
	btn.addEventListener('click', function(event) {
		var id = this.textContent;
		playAudioForButton(id);
		flashButton(id);
	});
});

document.addEventListener('keydown', function(event) {
	var id = event.key;
	playAudioForButton(id);
	flashButton(id);
});

function flashButton(id) {
	var flash = document.querySelector('.' + id);
	flash.classList.toggle('pressed');
	setTimeout(function() {
		flash.classList.toggle('pressed');
	}, 200);
}

function playAudioForButton(id) {
	switch (id) {
		case 'w':
			playAudio('tom-1');
			break;
		case 'a':
			playAudio('tom-2');
			break;
		case 's':
			playAudio('tom-3');
			break;
		case 'd':
			playAudio('tom-4');
			break;
		case 'j':
			playAudio('snare');
			break;
		case 'k':
			playAudio('crash');
			break;
		case 'l':
			playAudio('kick-bass');
			break;
		default:
			console.log('invalid sound');
	}
}

function playAudio(sound) {
	var audio = new Audio('sounds/' + sound + '.mp3');
	audio.play();
}
