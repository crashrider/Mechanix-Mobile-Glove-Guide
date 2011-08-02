//this is a temporary loop to create a fake group of "gloves". will sift through XML file in real app
var gloveCount;
for (var i=1; i<=30; i++) {
	var link = "";
	if (i/4 == Math.round(i/4)) {
		link = 'glovePages/glove4.jpg';
	} else if (i/3 == Math.round(i/3)) {
		link = 'glovePages/glove3.jpg';
	} else if (i/2 == Math.round(i/2)) {
		link = 'glovePages/glove2.jpg';
	} else {
		link = 'glovePages/glove1.jpg';
	}
	
	gloves.push({
		title:'GLOVE '+i,
		hasChild:true,
		test:link
	});
	gloveCount = i;
};

//Create new glove array for CUSTOM FONTS///
for (var i = 0; i < gloves.length; i++) {
	var row = Titanium.UI.createTableViewRow({
		backgroundGradient: {
			type:'linear',
			colors: ['#cfd0d4','#85868a'],
			startPoint: {x:0,y:0},
			endPoint: {x:0,y:40},
			backFillStart: false
		},
		borderWidth: 0,
		selectedBackgroundColor: '#484848',
	});
	var label = Titanium.UI.createLabel({
		text:gloves[i].title,
		font: {
			fontSize:14,
			fontFamily: 'Forza-Bold'
		},
		color: '#747579',
		width: 299,
		textAlign:'center'
	});
	row.add(label);
	row.hasChild=false;//gloves[i].hasChild;
	row.test=gloves[i].test;
	row.gName = gloves[i].title;
	row.className= 'custom_label';
	newGloves.push(row);
};
