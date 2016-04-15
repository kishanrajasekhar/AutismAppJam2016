
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
	var entry = $("#Journal").val();
	var lesson = $("#Lesson").val();
	if(entry.trim()=="" || lesson.trim()=="")
		return;
	$("#Journal").val(""); //set it back to empty
	$("#Lesson").val(""); //set it back to empty
	var timestamp = getTimeStamp();
	console.log(timestamp);
	localStorage.setItem(getTimeStamp(), lesson);
}

function getTimeStamp(){
	var d = new Date();
	var date = d.toDateString();
	var time = d.getHours() + ":" + d.getMinutes();
	return timestamp = date + " " + time;	
}
