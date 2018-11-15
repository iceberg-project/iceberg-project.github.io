var publication_info = [
	{
		"title"		: "Monitoring pack-ice seals from space with deep learning.",
		"authors"	: ["Goncalves, B.", "and H.J. Lynch"],
		"source"	: "Organized Oral Session on Using satellite imagery to study wildlife ecology in polar regions. Scientific Committee on Antarctic Research Biennial Meeting 2018",
		"timestamp"	: "11/15/2018"
	},
	{
		"title"		: "Harnessing high performance computing for large-scale imagery-enabled polar research",
		"url"		: "img/EarthCube2018poster_imagery_redacted.png",
		"authors"	: ["Heather J. Lynch" , ", Shantenu Jha", ", Bento Goncalves", ", Bradley Spitzbart" , ", Michael Willis", ",Michael MacFerrin", ", Vena Chu", ", Mark Salvatore", ", and Matteo Turilli"],
		"source"	: "EarthCube All-Hands Meeting, Washington, D.C. June 6-8, 2018",
		"timestamp"	: "06/06/2018"
	}
];

var generate_html = function(publication_sequence) {
	var html_string = "";
	for(var i=0; i<publication_sequence.length; i++) {
		html_string += "<div class=\"card bg-publication card-info mb-4\">";
		html_string += 	"<div class=\"row\">";
		html_string += 		"<div class=\"col-12 col-md-12\" style=\"padding: 0px;\">";
		html_string += 			"<div class=\"card-header\">";
		html_string += 				"<h5>";
		html_string += 					"<a class=\"text-primary\" href=\""+ publication_sequence[i]["url"] +"\" target=\"_blank\">";
		html_string += 						publication_sequence[i]["title"];
		html_string += 					"</a>";
		html_string += 				"</h5>";

		html_string += 			"</div>";
		html_string +=			"<ul class=\"list-group list-group-flush\">";
		html_string +=				"<li class=\"list-group-item\">";
		html_string +=					"<b>Author(s):</b> ";

		for(var j=0; j<publication_sequence[i]["authors"].length; j++)
			html_string += 					publication_sequence[i]["authors"][j] + " ";
		html_string +=					"<br/>";
		html_string +=					"<b>Source:</b> " + publication_sequence[i]["source"];
		html_string +=				"</li>";
		html_string +=			"</ul>";

		html_string +=		"</div>";
		html_string += "</div>";
		html_string += "</div>";
		html_string += "</div>";
	}
	return html_string;
};

var sort_publications_by = function(publication_sequence) {
	return publication_sequence;
};

var setPublications = function(publication_sequence) {
	var sorted_publications = sort_publications_by(publication_sequence);
	var sorted_publication_html = generate_html(sorted_publications);
	$("#publications").html(sorted_publication_html);
};

$(document).ready(function() {
	var sortKey = "Year Descending";
	setPublications(publication_info, sortKey);
});

