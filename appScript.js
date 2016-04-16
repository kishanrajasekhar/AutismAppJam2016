var TABLE_COUNT = 10; //Number of entries the table should display

//Adds new entry to the table on the home page
//using the key to access the value in local storage
function addTableEntry(key){
	var data = localStorage.getItem(key);
	if(data!=null){
		var lesson = data.split("EEKKS")[1];
		$('#dynamicTable').append('<tr><td class="Timestamp">'+timestamp+'</td><td>'+lesson+'</td></tr>');	
	}
}

//Opens another page (html file) in
//another window (a mini window)
function openMiniWindow(filename){
	window.open(filename, "", "width=500,height=600");
}

//Saves the journal entry and lesson the user 
//wrote in the local storage
function entrySubmission(){
	var entry = $("#Journal").val();
	var lesson = $("#Lesson").val();
	if(entry.trim()=="" || lesson.trim()=="")
		return;
	$("#Journal").val(""); //set it back to empty
	$("#Lesson").val(""); //''
	//later on, split through delimter EEKKS
	var data = entry + "EEKKS" + lesson;
	var timestamp = getTimeStamp();
	localStorage.setItem(timestamp, data);
}

//Return the time stamp in format
//[Day of Week] Month Day Year Time
//Where time format is Hour:Min (single or double digits, military time)
function getTimeStamp(){
	var d = new Date();
	var date = d.toDateString();
	var time = d.getHours() + ":" + d.getMinutes();
	return timestamp = date + " " + time;	
}
