function createVideoPopup(test){
	//alert(test.source.gloveID);
	var closeButton = Titanium.UI.createButton({
		title: "x",
		borderRadius: 12.5,
		borderColor: "#FFFFFF",
		backgrondColor: "#FFFFFF",
		backgroundImage: "none",
		color: "#FFFFFF",
		borderWidth: 2,
		width: 25,
		height: 25,
		left: 258,
		top: 190		
	});
	
	videoWin.add(closeButton);
	videoWin.open();
	
	videoWin.animate({opacity: 1, duration: 500}, function(){
		testPlayer.animate({opacity: 1, duration: 200});
		testPlayer.play();		
	});
	
	
	closeButton.addEventListener('click', closeListener);
	
	function closeListener(e){
		testPlayer.animate({opacity: 0, duration: 300}, function(){
			testPlayer.stop();
			videoWin.animate({opacity: 0, duration: 500}, function(){
					videoWin.close();
			});
		});
	}

}
