var people = {
	'Bento Goncalves' : {
		'title': "Ph.D student, Ecology and Evolution - Seals Use Case",
		'image': "img/Bento_Goncalves.png",
		'description': `Growing up in Southern Brazil, I received a bachelor’s degree in  biology working on 
						Central Amazon birds. As I matured as a researcher, I gradually shifted my focus towards 
						the quantitative end of Ecology and now I have Deep Learning as a central piece of my thesis work.`
	},
	'Helen Eifert' : {
		'title': "Ph.D student, Physics and Astronomy",
		'image': "img/helen.jpg",
		'description': `Helen Eifert is a first year PhD student in Dr. Mark Salvatore’s Planetary Exploration Lab in the 
							Department of Physics and Astronomy at Northern Arizona University. She is assisting with 
							the large-scale automation and image interpretation of landcover features in Antarctica for the ICEBERG project. 
							She hopes to use this work as a foundation to investigate active surface processes on 
							Mars via cold, dry Earth Analogs, including Antarctica. 
							Helen has a Bs in Geology and Outdoor Studies from St. Lawrence University in Canton, 
							NY where she studied various geomorphic 
							subjects including lake sediments, reaction wood, and mass movements with a 
							strong focus on field work.`
	},
	'Enbo Zhou' : {
		'title': "Ph.D student, Geography",
		'image': "img/Enbo.png",
		'description': `Enbo Zhou is the first year Ph.D. student at UC Santa Barbara geography department now. 
							He previously received his M.S. in Cartography 
							and GIS (2018), B.S. in GIS (2015) and B.E. in Economics (2015) from 
							Peking University, China. His research interests focus on intelligent 
							analysis for remote sensing imagery and its applications on Cyro-Hydrology, 
							spatio-temporal big data analytics, spatial data mining and spatial optimization.`
	},
	'Samira Daneshgar Asl' : {
		'title': "Postdoc",
		'image': "img/Samira_Daneshgar-Asl.JPG",
		'description': `Samira Daneshgar-Asl is a Postdoctoral Scholar at the Department of 
							Geography of UC Santa Barbara. She received her PhD in Oceanography 
							from Florida State University in 2017, MS in Photogrammetry Engineering 
							from K. N. Toosi University of Technology in 2010, and BS in Civil 
							Engineering-Geomatics from SRTT University in 2007. Her research 
							interests lie mainly in the areas of ocean and cryo-hydrologic remote 
							sensing. She is experienced in satellite image processing, GIS, oil 
							spill remote sensing (optical and SAR), and numerical modeling of oil 
							slicks as a function of air-sea interaction. She is currently focusing 
							on classifying supraglacial hydrological features on Arctic glaciers 
							particularly the Greenland Ice Sheet utilizing high-resolution 
							WorldView satellite imagery and Deep Learning techniques.`
	},
	'Vena Chu' : {
		'title': "Principal Investigator, Rivers Use Case",
		'image': "img/Chu_Headshot.jpg",
		'description': ``
	},
};

$(".peopleModal").click( function(event) {
	var selectedPerson = Object.keys(people)[0]; // default value
	selectedPerson = event.currentTarget.innerText.split(',')[0].trim(); // get name from the div which has been clicked
	$("#nameModal").html( selectedPerson );
	$("#titleModal").html( people[selectedPerson]['title'] );
	$("#imageModal").attr( "src", people[selectedPerson]['image'] );
	$("#descriptionModal").html( people[selectedPerson]['description'] );
});
