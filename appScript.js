var TABLE_COUNT = 8; //Number of entries the table should display 
			
//Adds new entry to the table on the home page
//using the key to access the value in local storage
function addTableEntry(timestamp){
	var data = localStorage.getItem(timestamp);
	if(data!=null){
		var lesson = data.split("EEKKS")[1];
		$('#dynamicTable').prepend('<tr><td class="Timestamp">'+timestamp+'</td><td class="myLesson">'+lesson+'</td></tr>');	
	}
}

//Displays the N most recently added entries,
//even from previous sessions
function displayMostRecent(n){
	$('#dynamicTable th').remove();
	for(var i=1; i<=n; i++){
		var key = "temp" + i;
		var timestamp = localStorage.getItem(key);
		// console.log(timestamp);
		if(timestamp==null)
			break;
		addTableEntry(timestamp);
	}
	$("#dynamicTable").prepend('<th>Date</th><th>Lesson</th>');
}

//Resets all the temp keys up to tempn
function reinitializeTemps(n){
	for (var i=1; i<n; i++){
		var key = "temp"+i;
		var key2 = "temp"+(i+1);
		timestamp = localStorage.getItem(key2);
		if(timestamp==null)
			break;
		localStorage.setItem(key,timestamp);
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
	//Journal Entries are always saved with its corresponding timestamp
	localStorage.setItem(timestamp, data);
	//Temporary keys are used to display the table in the home page
	if(!localStorage.journalCount)
		localStorage.journalCount = 0;
    localStorage.journalCount = Number(localStorage.journalCount) + 1;
    console.log("entrySubmission: " + localStorage.journalCount);
    //temp keys will get new values 
	//it recycles, so that the table in the home page won't grow too big
    if(Number(localStorage.journalCount) > TABLE_COUNT){
    	localStorage.journalCount = TABLE_COUNT;
    	reinitializeTemps(TABLE_COUNT);
    }
    localStorage.setItem("temp"+localStorage.journalCount, timestamp);
}


//Return the time stamp in format
//[Day of Week] Month Day Year Time
//Where time format is Hour:Min (single or double digits, imperial time)
function getTimeStamp(){
	var d = new Date();
	var hours = d.getHours();
	var minutes = d.getMinutes();
	var seconds = d.getSeconds();
	var ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = minutes < 10 ? '0'+minutes : minutes;
	var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
	var date = d.toDateString();
	return timestamp = date + ", " + strTime;	
}

//Generates all possible clock times in a 24 hr day (military time)
//O(24*60*60) = O(86400) = O(1)
function generateClockTimes(){
	for(var h=0; h<24; h++){
		for(var m=0; m<60; m++){
			for(var s=0; s<60; s++){
				var time = h+":"+m+":"+s;
			}
		}
	}
}
