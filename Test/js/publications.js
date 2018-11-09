var publication_info = [
	{
		"title"		: "Black-swan events: Population crashes or temporary emigration?",
		"url"		: "http://www.pnas.org/content/early/2017/10/11/1713621114.full",
		"authors"	: ["Youngflesh, C.", "and H.J. Lynch"],
		"source"	: "PNAS October 24, 2017 114 (43) E8953-E8954",
		"timestamp"	: "10/12/2017"
	},
	{
		"title"		: "Spatial aggregation reveals robust dynamics despite stochastic noise in pan-Antarctic analysis of Adélie penguin abundance",
		"url"		: "https://www.nature.com/articles/s41467-017-00890-0",
		"authors"	: ["Che-Castaldo, C.", "S. Jenouvrier", "C. Youngflesh", "K. Shoemaker", "G. Humphries", "P. McDowall", "L. Landrum", "M. Holland", "Y. Li", "R. Ji", "and H.J. Lynch"],
		"source"	: "Nature Communicationsvolume 8, Article number: 832 (2017)",
		"timestamp"	: "10/10/2017"
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

