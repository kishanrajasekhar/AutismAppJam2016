//var TABLE_COUNT = 10; //Number of entries the table should display 
			
//Adds new entry to the table on the home page
//using the key to access the value in local storage
function addTableEntry(timestamp){
	var data = localStorage.getItem(timestamp);
	if(data!=null){
		var lesson = data.split("EEKKS")[1];
		$('#dynamicTable').append('<tr><td class="Timestamp">'+timestamp+'</td><td>'+lesson+'</td></tr>');	
	}
}

//Displays journal entries recently added (during the browser session)
function displaySessionTable(){
	console.log(Number(sessionStorage.journalCount));
	for(var i=1; i<=Number(sessionStorage.journalCount); i++){
		var key = "temp" + i;
		console.log(key);
		var timestamp = sessionStorage.getItem(key);
		addTableEntry(timestamp);
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
	//EEKKS is the delimter. Later, we split the string.
	var data = entry + "EEKKS" + lesson;
	var timestamp = getTimeStamp();
	localStorage.setItem(timestamp, data);
	//Temporary storage of recently added journal entries (added within the same browser session)
	//Only lasts for single session
    if (sessionStorage.journalCount) {
    sessionStorage.journalCount = Number(sessionStorage.journalCount) + 1;
	} else {
	    sessionStorage.journalCount = 1;
	}
    console.log("entrySubmission: " + sessionStorage.journalCount);
    sessionStorage.setItem("temp"+sessionStorage.journalCount, timestamp);
}

//Return the time stamp in format
//[Day of Week] Month Day Year Time
//Where time format is Hour:Min (single or double digits, military time)
function getTimeStamp(){
	var d = new Date();
	var date = d.toDateString();
	var time = d.getHours() + ":" + d.getMinutes()+":"+d.getSeconds();
	return timestamp = date + " " + time;	
}
