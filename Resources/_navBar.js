var catButtonArray = [];
function createNavButtons(parent) {
	//var numTotalSpaces=12;
	//var numNavButtons=3;
	var numCatButtons=7;
	var catButtonSP = 5;
	var actualCount = 1;
	var img1 = Titanium.UI.createImageView({
		image: 'ui-images/nav-bar/nav-up-1.png',
		width: 90,
		left: 0
	});
	var nav1 = Titanium.UI.createButton({
		defaultImage: 'ui-images/nav-bar/nav-up-2.png',
		backgroundSelectedImage: 'ui-images/nav-bar/nav-down-2.png',
		backgroundImage: 'ui-images/nav-bar/nav-up-2.png',
		height:43,
		width: 35,
		left: 90,
		borderRadius: 0,
		win: 'Gauge',
		isSelected: 0
	});
	var nav2 = Titanium.UI.createButton({
		defaultImage: 'ui-images/nav-bar/nav-up-3.png',
		backgroundSelectedImage: 'ui-images/nav-bar/nav-down-3.png',
		backgroundImage: 'ui-images/nav-bar/nav-up-3.png',
		height:43,
		width: 35,
		left: 125,
		borderRadius: 0,
		win: 'Guide',
		isSelected: 0
	});
	var nav3 = Titanium.UI.createButton({
		defaultImage: 'ui-images/nav-bar/nav-up-4.png',
		backgroundSelectedImage: 'ui-images/nav-bar/nav-down-4.png',
		backgroundImage: 'ui-images/nav-bar/nav-up-4.png',
		height:43,
		width: 35,
		left: 160,
		borderRadius: 0,
		win: 'Info',
		isSelected: 0
	});
	for (var i=0;i<=numCatButtons-1;i++) {
		catButtonArray[i] = Titanium.UI.createButton({
			defaultImage: 'ui-images/nav-bar/nav-up-' + (catButtonSP + i) + '.png',
			backgroundSelectedImage: 'ui-images/nav-bar/alt-nav-down-' + (catButtonSP + i) + '.png',
			backgroundImage: 'ui-images/nav-bar/nav-up-' + (catButtonSP + i) +'.png',
			height:43,
			width:110,
			top: -43,
			left: 195+(i*110),
			borderRadius: 0,
			isSelected: 0
		});		
		catButtonArray[i].addEventListener('click', catButClick);
		parent.add(catButtonArray[i]);
		actualCount++;
	};
	var img2 = Titanium.UI.createImageView({
		image: 'ui-images/nav-bar/nav-up-12.png',
		width: 59,
		left: 965
	});

	nav1.addEventListener('click', getHandChart);
	nav2.addEventListener('click', getGloveGuide);
	nav3.addEventListener('click', getInfo);
	
	parent.add(img1);
	parent.add(nav1);
	parent.add(nav2);
	parent.add(nav3);

	parent.add(img2);
	
};

function addNavButtonListeners(currButton) {
	currButton.addEventListener('click', navButClick);
};

function getGloveGuide(e) {
	var selectButton = e.source;
	var currWin;
	if (selectButton.win=='Guide') {
		currWin = ggDetailView;
		//animateCatButtons();
	} else if (selectButton.win=='Info') {
		currWin = ggInfoView;
	} else if (selectButton.win=='Gauge') {
		currWin = ggHangGaugeView;
		
	}
	
	/*if (selectButton.isSelected == 0) {
		selectButton.backgroundImage = selectButton.backgroundSelectedImage;
		selectButton.isSelected = 1;
		if (selectButton.win=='Guide'||selectButton.win=='Info'||selectButton.win=='Gauge') {
			ggContentsWin.right = 1024;
			ggContentsWin.add(currWin);
			ggContentsWin.animate({
				right: 0,
				duration: 300
			});
		}
		
	} else {
		selectButton.backgroundImage = selectButton.defaultImage;
		selectButton.isSelected = 0;
		if (selectButton.win=='Guide'||selectButton.win=='Info'||selectButton.win=='Gauge') {
			ggContentsWin.animate({
				right: -1024,
				duration: 300
			}, function() {
				ggContentsWin.remove(currWin);
				ggContentsWin.right = 1024;
			});
			//ggContentsWin.animate({view: currWin, transition:Ti.UI.ANIMATION_CURVE_EASE_IN});
			//animateCatButtons();
		}
	}
	if (selectButton.win=='Guide') {
		if (selectButton.isSelected==1){
			animateCatButtons();
		} else {
			animateCatButtons(1);
		}
	}*/
};

function getHandChart(e) {
	
};

function getInfo(e) {
	
};

function catButClick(e) {
	//make sure only one Down State is selected at a time, like a tab bar
	var selectButton = e.source;
	//if (ggDetailView.parent) {
		for (var i=0;i<=catButtonArray.length;i++) {
			if (selectButton.left == catButtonArray[i].left) {
				selectButton.backgroundImage = selectButton.backgroundSelectedImage;
			} else {
				catButtonArray[i].backgroundImage = catButtonArray[i].defaultImage;
			}
		};
	//}

};

function animateCatButtons(backwards) {
	if (backwards==1){
		var actualCatLen = catButtonArray.length-1;
		for(var i=actualCatLen; i>=0; i--) {
			catButtonArray[i].animate({top: -43, duration: (actualCatLen-i)*100});
		}
	} else {
			
		for(var i=0; i<=catButtonArray.length; i++) {
			catButtonArray[i].animate({top: 0, duration: i*100});
			//setTimeout(function(){alert(currButt[i])}, i*2000);
		}
	}
}