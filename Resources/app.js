//main app BG color
Titanium.UI.iPhone.statusBarHidden = true;
Titanium.UI.setBackgroundColor('#000000');

//init 
var gloves = [];
var newGloves = [];

//misc JS files that are needed
Ti.include("navBar.js");
Ti.include("getGloves.js");
Ti.include("video-popup.js");
Ti.include("allGlovesArray.js");

//Application Window
var ggMainContainer = Titanium.UI.createWindow({
   backgroundColor:'#000000',
   height: 768,
   width: 1024,
   backgroundImage: 'ui-images/main-bg.png',
   borderRadius: 5
});

var splashScreen = Titanium.UI.createWindow({
	backgroundImage: 'ui-images/Default-Landscape.png',
	backgroundColor: '#000000',
   height: 768,
   width: 1024,
   borderRadius: 5
});

//NavBar (ALWAYS AT TOP)
var navBar = Titanium.UI.createWindow({
   //backgroundImage: 'ui-images/top-nav.png',
   height: 43,
   top: 0,
   left: 0,
   width: 1024,
   backgroundGradient: {
   	type:'linear',
   	colors: ['#1e1e1e','#595959'],
   	startPoint: {x:0, y:0},
   	endPoint: {x:1024, y:0},
   	backFillStart: false
   }
});

var videoWin = Titanium.UI.createWindow({
		backgroundImage: "ui-images/vid_bg.png",
		opacity: 0		
});

//App Views get added to this
var ggContentsWin = Titanium.UI.createWindow({
   backgroundColor: "#FFFFFF",
   width: 7168,
   top: 43,
   height: 725,
   left: 1024
});

/*var ggContentsWin = Titanium.UI.createWindow({
   backgroundColor: "#FFFFFF",
   width: 1024,
   top: 43,
   hieght: 725,
   left: 1024
});*/

var testPlayer = Titanium.Media.createVideoPlayer({
	url: 'test.mov',
	opacity: 0,
	width: 480,
	height: 350,
	autoplay: false,
	initialPlaybackTime: '0',
	movieControlStyle: Titanium.Media.VIDEO_CONTROL_NONE,
	scalingMode: Titanium.Media.VIDEO_SCALING_ASPECT_FIT	
});

videoWin.add(testPlayer);

//Different Info Views that get added to ggContentsWin//
var ggDetailView = Titanium.UI.createWindow({
   backgroundColor:'#FFFFFF',
   top: 768,
   width: 1024,
   height: 725
});

var ggInfoView = Titanium.UI.createWindow({
   backgroundImage: 'ui-images/Glove_Started.jpg',
});

var ggHangGaugeView = Titanium.UI.createWindow({
   backgroundColor: '#ff0000'
});

//Force landscape viewing only
ggMainContainer.orientationModes = [
	Titanium.UI.LANDSCAPE_RIGHT,
	Titanium.UI.LANDSCAPE_LEFT
];
splashScreen.orientationModes = [
	Titanium.UI.LANDSCAPE_RIGHT,
	Titanium.UI.LANDSCAPE_LEFT
];

////Create glove menu & image box for ggDetailView////
var gloveMenu = Titanium.UI.createTableView(
{
	data:newGloves,
	rowHeight: 40,
	id: 'gloveMenu',
	right: 0,
	width: 299,
	backgroundColor: '#9a9a9a',
});

var gloveDetail = Titanium.UI.createImageView(
{
	width: 725,
	height: 725,
	left:0,
	gloveID: "maybe"
});

gloveMenu.addEventListener('click', function(e){
	gloveDetail.image = e.row.test;
	gloveDetail.gloveID = e.row.gName;	
});

gloveDetail.addEventListener('singletap', function(e){
	createVideoPopup(e);
});

testPlayer.addEventListener('complete', function(e){
	testPlayer.animate({opacity: 0, duration: 300}, function(){
		testPlayer.stop();
		videoWin.animate({opacity: 0, duration: 500}, function(){
				videoWin.close();
		});
	});
});

gloveDetail.addEventListener('touchmove', function(){
	alert("swiped!");
});

/////Add essentials to app////////
createNavButtons(navBar);

ggDetailView.add(gloveMenu);
ggDetailView.add(gloveDetail);

ggMainContainer.add(ggDetailView);
ggMainContainer.add(ggContentsWin);
ggMainContainer.add(navBar);

ggMainContainer.open({fullscreen:true});
splashScreen.open({fullscreen: true});

setTimeout(fadeSS, 2000);

function fadeSS(){
	splashScreen.animate({view: ggMainContainer, transition:Ti.UI.ANIMATION_CURVE_EASE_IN}, function(){
		setTimeout(animateCatButtons, 200);
	});
}

Ti.include("categories.js");
