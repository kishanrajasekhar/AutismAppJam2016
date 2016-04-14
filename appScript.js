
//adds new entry to the table
function addEntry(){
	var input = $("#entryBox").val();
	if(input.trim()=="")
		return;
	$("#entryBox").val(""); //set it back to empty
	var d = new Date();
	var date = d.toDateString();
	$('#dynamic').append('<tr><td>'+d+'</td><td>'+input+'</td></tr>');	
}

function entrySubmission(){
	
}
