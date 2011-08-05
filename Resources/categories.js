var allGlovesCont = Titanium.UI.createView({
	backgroundColor: "#FFFFFF",
	width: 1024,
	height: 725,
	left: 0	
});

var allGlovesSVContent = Titanium.UI.createView({
	width: 'auto',
	height: 725
});

var allGlovesSV = Titanium.UI.createScrollView({
	contentWidth: 'auto',
	contentHeight: 'auto',
	showVerticalScrollIndicator:false,
	showHorizontalScrollIndicator:true,
});

var racingCont = Titanium.UI.createView({
	backgroundColor: "#b20000",
	width: 1024,
	height: 725,
	bottom: 0,
	left: 1*1024
});
var automotiveCont = Titanium.UI.createView({
	backgroundColor: "#FF0000",
	width: 1024,
	height: 725,
	bottom: 0,
	left: 2*1024
});
var hardwareCont = Titanium.UI.createView({
	backgroundColor: "#de8300",
	width: 1024,
	height: 725,
	bottom: 0,
	left: 3*1024
});
var safetyCont = Titanium.UI.createView({
	backgroundColor: "#b4ff00",
	width: 1024,
	height: 725,
	bottom: 0,
	left: 4*1024
});
var tacticalCont = Titanium.UI.createView({
	backgroundColor: "#000000",
	width: 1024,
	height: 725,
	bottom: 0,
	left: 5*1024
});
var gardenCont = Titanium.UI.createView({
	backgroundColor: "#918500",
	width: 1024,
	height: 725,
	bottom: 0,
	left: 6*1024
});

/*var scrollView = Titanium.UI.createScrollableView({
	views:[allGlovesSV,racingView,automotiveView,hardwareView,safetyView,tacticalView,gardenView],
	showPagingControl:false,
	maxZoomScale:1,
	currentPage:1
});*/

addGloveImages(allGlovesSVContent);

function addGloveImages(parent){
	var gloveImageArray = [];
	var lastGloveWidth = 0;
	var totalLeft = 0;
	for (i=1; i<=30; i++){
		gloveImageArray[i] = Titanium.UI.createImageView({
			url: 'gloveThumbs/_sized/' + i + '.jpg',
			height: 230,
			width: 'auto',
			//left: i*120,
			detail: 'glovePages/glove' + i +'.jpg'
		});
		if (i>1&&i!=11&&i!=21){
			totalLeft+=lastGloveWidth;
		}
		
		if (i<=10){
			gloveImageArray[i].top = 21;
		} else if (i>=11&&i<=20){
			gloveImageArray[i].top = 241;
		} else if (i>=21&&i<=30){
			gloveImageArray[i].top = 468;
		}
		if (((i-1)/10) == Math.round(i/10)) {
			totalLeft = 0;
			lastGloveWidth = 0;
		}	
		gloveImageArray[i].left = totalLeft;
		parent.add(gloveImageArray[i]);		
		gloveImageArray[i].addEventListener('click', glovePicked);
		
		lastGloveWidth = gloveImageArray[i].width;
	}
	allGlovesSV.add(parent);
	allGlovesCont.add(allGlovesSV);
}
ggContentsWin.add([allGlovesCont,racingCont,automotiveCont,hardwareCont,safetyCont,tacticalCont,gardenCont]);

function glovePicked(e){
	gloveDetail.image = e.source.detail;
	ggContentsWin.animate({top: -682, duration: 200});
	//e.source.parent.animate({width: 1024, duration: 200});
	//ggDetailView.top = 43;
	ggDetailView.animate({top: 43, duration: 200}, function(){ggDetailView.top = 43;});
}


