var people = {
	'Bento Goncalves' : {
		'title': "Ph.D student, Ecology and Evolution - Seals Use Case",
		'image': "img/Bento_Goncalves.png",
		'description': `Growing up in Southern Brazil, I received a bachelor’s degree in  biology working on
						Central Amazon birds. As I matured as a researcher, I gradually shifted my focus towards
						the quantitative end of Ecology and now I have Deep Learning as a central piece of my thesis work.
						<br/><br/>Seals project: Antarctic pack-ice seals, a group of four species of true seals (Phocidae),
						play a pivotal role in the Southern Ocean foodweb as wide-ranging Antarctic krill (Euphausia
						uperba) predators. This project aims to automate pack-ice seal surveys using a combination
						of remote sensing, computer vision, seal ecology and HPC. Apart from being cheaper and safer
						when compared to aerial imagery, the scale at which we can survey pack-ice seals with remote
						sensing imagery will fill an important information gap in Antarctic ecology. This study also
						showcases the ever-growing benefits of incorporating AI into ecological sampling designs.`
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
		'description': `I am an Assistant Professor at the UC Santa Barbara Department of Geography, 
							and I am interested in Arctic climate change and impacts on hydrology, particularly 
							for the Greenland ice sheet.  Currently, my work deals with understanding the spatial 
							and temporal dynamics of the Greenland ice sheet hydrologic system from snow to sea 
							using geospatial technologies and field techniques. My research has focused on meltwater 
							input into the ice sheet (through supraglacial rivers and moulins) as well as meltwater 
							export into the ocean (through proglacial rivers and fjord sediment plumes).  I was a recent
							UC President's Postdoctoral Fellow at the UC Berkeley Department of Geography, and 
							earned my Ph.D. from the UCLA Department of Geography.`
	},
	'Heather Lynch' : {
		'title': "Principal Investigator, ICEBERG",
		'image': "img/Lynch_Heather.jpg",
		'description': ` `
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
