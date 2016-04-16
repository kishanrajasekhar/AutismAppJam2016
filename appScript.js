
//adds new entry to the table on the home page
//using the key to access the value in local storage
function addTableEntry(key){
	var data = localStorage.getItem(key);
	if(data!=null){
		var lesson = data.split("EEKKS")[1];
		$('#dynamicTable').append('<tr><td class="Timestamp">'+timestamp+'</td><td>'+lesson+'</td></tr>');	
	}
	// $('#dynamicTable').append('<tr><td>'+d+'</td><td>'+input+'</td></tr>');	
}

function openMiniWindow(filename){
	// window.open(filename);
	window.open(filename, "", "width=400,height=600");
}

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

function getTimeStamp(){
	var d = new Date();
	var date = d.toDateString();
	var time = d.getHours() + ":" + d.getMinutes();
	return timestamp = date + " " + time;	
}
