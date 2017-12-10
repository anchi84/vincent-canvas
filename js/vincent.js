var selector = document.getElementById("fileSelector");
var canvas = document.getElementById("canvasImageDisplay");
var context = canvas.getContext('2d');
var image = new Image();

function refresh() {
	var aspectRatio = image.width/image.height;
	canvas.height = canvas.width/aspectRatio;
	context.drawImage(image, 0, 0, canvas.width, canvas.height);
}


function load(event){
	image.onload = refresh;
	image.src = event.target.result;
}

function read() {
   var reader = new FileReader();
   reader.onload = load;
   reader.readAsDataURL(selector.files[0]);
}

function getCursorPosition(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    var x = Math.floor(event.clientX - rect.left);
    var y = Math.floor(event.clientY - rect.top);
	var message = '('+x +', '+y +')';
	var context = canvas.getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.drawImage(image, 0, 0, canvas.width, canvas.height);
    context.font = '15pt Calibri';
    context.fillStyle = 'black';
    //context.fillText(message, 0, 15);
	if(x > canvas.width/2) {
		x = x - 90;
	}
	if(y < canvas.height/2) {
		y = y + 15;
	}
	else {
		y = y - 10;
	}
	context.fillText(message, x, y);
}