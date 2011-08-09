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
	//backgroundColor: "#b20000",
	backgroundColor: "#FFFFFF",
	width: 1024,
	height: 725,
	bottom: 0,
	left: 1*1024
});
var racingSVContent = Titanium.UI.createView({
	width: 'auto',
	height: 725
});
var racingSV = Titanium.UI.createScrollView({
	contentWidth: 'auto',
	contentHeight: 'auto',
	showVerticalScrollIndicator:false,
	showHorizontalScrollIndicator:true,
});

var automotiveCont = Titanium.UI.createView({
	//backgroundColor: "#FF0000",
	backgroundColor: "#FFFFFF",
	width: 1024,
	height: 725,
	bottom: 0,
	left: 2*1024
});
var automotiveSVContent = Titanium.UI.createView({
	width: 'auto',
	height: 725
});
var automotiveSV = Titanium.UI.createScrollView({
	contentWidth: 'auto',
	contentHeight: 'auto',
	showVerticalScrollIndicator:false,
	showHorizontalScrollIndicator:true,
});

var hardwareCont = Titanium.UI.createView({
	//backgroundColor: "#de8300",
	backgroundColor: "#FFFFFF",
	width: 1024,
	height: 725,
	bottom: 0,
	left: 3*1024
});
var hardwareSVContent = Titanium.UI.createView({
	width: 'auto',
	height: 725
});
var hardwareSV = Titanium.UI.createScrollView({
	contentWidth: 'auto',
	contentHeight: 'auto',
	showVerticalScrollIndicator:false,
	showHorizontalScrollIndicator:true,
});

var safetyCont = Titanium.UI.createView({
	//backgroundColor: "#b4ff00",
	backgroundColor: "#FFFFFF",
	width: 1024,
	height: 725,
	bottom: 0,
	left: 4*1024
});
var safetySVContent = Titanium.UI.createView({
	width: 'auto',
	height: 725
});
var safetySV = Titanium.UI.createScrollView({
	contentWidth: 'auto',
	contentHeight: 'auto',
	showVerticalScrollIndicator:false,
	showHorizontalScrollIndicator:true,
});

var tacticalCont = Titanium.UI.createView({
	//backgroundColor: "#000000",
	backgroundColor: "#FFFFFF",
	width: 1024,
	height: 725,
	bottom: 0,
	left: 5*1024
});
var tacticalSVContent = Titanium.UI.createView({
	width: 'auto',
	height: 725
});
var tacticalSV = Titanium.UI.createScrollView({
	contentWidth: 'auto',
	contentHeight: 'auto',
	showVerticalScrollIndicator:false,
	showHorizontalScrollIndicator:true,
});

var gardenCont = Titanium.UI.createView({
	//backgroundColor: "#918500",
	backgroundColor: "#FFFFFF",
	width: 1024,
	height: 725,
	bottom: 0,
	left: 6*1024
});
var gardenSVContent = Titanium.UI.createView({
	width: 'auto',
	height: 725
});
var gardenSV = Titanium.UI.createScrollView({
	contentWidth: 'auto',
	contentHeight: 'auto',
	showVerticalScrollIndicator:false,
	showHorizontalScrollIndicator:true,
});

var setCatFilterID = 0;

addGloveImages(allGlovesSVContent, allGlovesSV, allGlovesCont, "all");
addGloveImages(racingSVContent, racingSV, racingCont, 2);
addGloveImages(automotiveSVContent, automotiveSV, automotiveCont, 3);
addGloveImages(hardwareSVContent, hardwareSV, hardwareCont, 4);
addGloveImages(safetySVContent, safetySV, safetyCont, 5);
addGloveImages(tacticalSVContent, tacticalSV, tacticalCont, 6);
addGloveImages(gardenSVContent, gardenSV, gardenCont, 7);

function addGloveImages(contentWin, scrollWin, container, filterCats){
	setCatFilterID = filterCats;
	
	var gloveImageArray = [];
	var lastGloveWidth = 0;
	var totalLeft = 0;
	var sortedGloves = allGlovesArray.filter(sortFilter);
	
	var imageArrayLength = sortedGloves.length;
	if (imageArrayLength<15){
		contentWin.width = 1024;
	}
	
	for (i=0; i<=imageArrayLength-1; i++){
		gloveImageArray[i] = Titanium.UI.createImageView({
			url: sortedGloves[i].link,
			height: 230,
			width: 'auto',
			id: sortedGloves[i].id,
			detail: 'glovePages/glove' + (i+1) +'.jpg',
			cats: sortedGloves[i].cats
		});
		if (imageArrayLength>5){
			if (i+1>1&&i+1!=(Math.ceil(imageArrayLength/3))+1&&i+1!=((Math.ceil(imageArrayLength/3))*2)+1){
				totalLeft+=lastGloveWidth;
			}		
			if (i+1<=Math.ceil(imageArrayLength/3)){
				gloveImageArray[i].top = 21;
			} else if ((i+1)<=((Math.ceil(imageArrayLength/3)*2))){
				gloveImageArray[i].top = 247;
			} else if (i+1<=imageArrayLength){
				gloveImageArray[i].top = 474;
			}
		} else {
			if (i+1>1){
				totalLeft+=lastGloveWidth;
			}
			gloveImageArray[i].top = 21;
		}	
		gloveImageArray[i].left = totalLeft;
		contentWin.add(gloveImageArray[i]);		
		gloveImageArray[i].addEventListener('click', glovePicked);
		lastGloveWidth = gloveImageArray[i].width;
		
		//reset totalLeft to start images from left again
		if (imageArrayLength>5){
			if (i+1==Math.ceil(imageArrayLength/3)||i+1==((Math.ceil(imageArrayLength/3)*2))) {
				totalLeft = 0;
				lastGloveWidth = 0;
			}
		}
	}
	scrollWin.add(contentWin);
	container.add(scrollWin);
}
ggContentsWin.add([allGlovesCont,racingCont,automotiveCont,hardwareCont,safetyCont,tacticalCont,gardenCont]);

function glovePicked(e){
	gloveDetail.image = e.source.detail;
	ggContentsWin.animate({top: -682, duration: 200});
	ggDetailView.animate({top: 43, duration: 200}, function(){ggDetailView.top = 43;});
}

function sortFilter(item){
	if (setCatFilterID == "all"){
		return (item.cats != 9);
	} else {
		if (item.cats.length>1){
			return (item.cats[0] == setCatFilterID||item.cats[1] == setCatFilterID);
		} else {
			return (item.cats[0] == setCatFilterID);
		}
	}
}

