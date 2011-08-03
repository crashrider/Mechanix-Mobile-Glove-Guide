var allGlovesCont = Titanium.UI.createView({
	backgroundColor: "#336699",
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
	for (i=0; i<=20; i++){
		gloveImageArray[i] = Titanium.UI.createImageView({
			url: 'gloveThumbs/MW09_MG_01_H_168x150.jpg',
			height: 'auto',
			width: 150,
			left: i*150,
			id: i
		});
		parent.add(gloveImageArray[i]);		
		gloveImageArray[i].addEventListener('click', glovePicked);	
	}
	allGlovesSV.add(parent);
	allGlovesCont.add(allGlovesSV);
}
ggContentsWin.add([allGlovesCont,racingCont,automotiveCont,hardwareCont,safetyCont,tacticalCont,gardenCont]);

function glovePicked(e){
	//alert("you clicked glove number " + e.source.id);
	ggContentsWin.animate({top: -682, duration: 200});
	//e.source.parent.animate({width: 1024, duration: 200});
	//ggDetailView.top = 43;
	ggDetailView.animate({top: 43, duration: 200}, function(){ggDetailView.top = 43;});
}


