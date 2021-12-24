var clock = 0;
var clockCounter = 0;
var txtId = "timer";

var colors = [
	[1, 36, 89],
	[0, 57, 114],
	[0, 57, 114],
	[0, 67, 114],
	[0, 67, 114],
	[1, 103, 146],
	[7, 114, 159],
	[18, 161, 192],
	[116, 212, 204],
	[239, 238, 188],
	[254, 225, 84],
	[253, 195, 82],
	[255, 172, 111],
	[253, 166, 90],
	[253, 158, 88],
	[241, 132, 72],
	[240, 107, 126],
	[202, 90, 146],
	[91, 44, 131],
	[55, 26, 121],
	[40, 22, 107],
	[25, 40, 97],
	[4, 11, 60],
	[4, 11, 60],
];

var colorsGradient = [
	[0, 19, 34],
	[0, 19, 34],
	[0, 19, 34],
	[0, 24, 43],
	[1, 29, 52],
	[0, 24, 43],
	[4, 44, 71],
	[7, 80, 110],
	[19, 134, 166],
	[97, 208, 207],
	[163, 222, 198],
	[232, 237, 146],
	[255, 228, 103],
	[255, 228, 103],
	[255, 228, 103],
	[255, 211, 100],
	[249, 168, 86],
	[244, 137, 107],
	[209, 98, 139],
	[113, 54, 132],
	[69, 33, 124],
	[55, 32, 116],
	[35, 48, 114],
	[1, 36, 89],
];

var from;
var to;

var fromGradient;
var toGradient;


function setColor(color, gradient){
	/*
background: #28166b;
background: -moz-linear-gradient(top,  #28166b 0%, #45217c 100%);
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#28166b), color-stop(100%,#45217c));
background: -webkit-linear-gradient(top,  #28166b 0%,#45217c 100%);
background: -o-linear-gradient(top,  #28166b 0%,#45217c 100%);
background: -ms-linear-gradient(top,  #28166b 0%,#45217c 100%);
background: linear-gradient(to bottom,  #28166b 0%,#45217c 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#28166b', endColorstr='#45217c',GradientType=0 );
*/
	//document.body.style.backgroundColor = "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
	//$(document.body).css("background", "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")");
	//$(document.body).css("background", "-moz-linear-gradient(top,  #28166b 0%, #45217c 100%");
	//$(document.body).css("background", "-webkit-gradient(linear, left top, left bottom, color-stop(0%,#28166b), color-stop(100%,#45217c))");
	$("#display").css("background", "linear-gradient(to bottom, " + "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")" + ", rgb(" + gradient[0] + "," + gradient[1] + "," + gradient[2] + "))");
	//console.log("background", "linear-gradient(to right, " + "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")" + ", rgb(" + gradient[0] + "," + gradient[1] + "," + gradient[2] + "))");
}



setInterval(function(){

	//for(let colorIndex = 0; colorIndex < colors.length - 1; colorIndex++){	

		from = colors[clockCounter % colors.length];
		to = colors[(clockCounter+1) % colors.length];

		fromGradient = colorsGradient[clockCounter % colorsGradient.length];
		toGradient = colorsGradient[(clockCounter+1) % colorsGradient.length];

		//while(clock < 60){

			colorGenerate = [0,0,0];
			colorGenerateGradient = [0,0,0];

			for(let i=0; i < 3; i++){
				colorGenerate[i] = Math.round(from[i] + ((to[i] - from[i]) * clock / 60));
				colorGenerateGradient[i] = Math.round(fromGradient[i] + ((toGradient[i] - fromGradient[i]) * clock / 60));
			}

			setColor(colorGenerate, colorGenerateGradient);

			let text = clockCounter % 24 + " : " + clock;
	

			//console.log(text);
			//console.log(clock + " = " +  colorGenerate);
			document.getElementById(txtId).innerHTML = text;



			clock++;
		//}
		if(clock >= 60){
		clock = 0;
		clockCounter++;
		}
	

}, 10);


