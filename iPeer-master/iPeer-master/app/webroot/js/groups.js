function itemMove(fbox, tbox) {

	var arrFbox = new Array();
	var arrTbox = new Array();
	var arrLookup = new Array();
	var i;

	for (i = 0; i < tbox.options.length; i++) {
		arrLookup[tbox.options[i].value] = tbox.options[i].text;
		arrTbox[i] = tbox.options[i].value;
	}

	var fLength = 0;
	var tLength = arrTbox.length;
	for(i = 0; i < fbox.options.length; i++) {
		arrLookup[fbox.options[i].value] = fbox.options[i].text;
		if (fbox.options[i].selected && fbox.options[i].value != "") {
			arrTbox[tLength] = fbox.options[i].value;
			tLength++;
		}
		else {
			arrFbox[fLength] = fbox.options[i].value;
			fLength++;
		}
	}

	arrFbox.sort();
	arrTbox.sort();
	fbox.length = 0;
	tbox.length = 0;
	var c;

	for(c = 0; c < arrFbox.length; c++) {
		var no = new Option();
		no.value = arrFbox[c];
		no.text = arrLookup[arrFbox[c]];
		fbox[c] = no;
	}
	for(c = 0; c < arrTbox.length; c++) {
		var no = new Option();
		no.value = arrTbox[c];
		no.text = arrLookup[arrTbox[c]];
		tbox[c] = no;
	}

	var assigned = "";

  for (i = 0; i < tbox.length - 1; i++){
    if (tbox.options[i] != -1){
      assigned = assigned + tbox.options[i].value + ":";
    }
	}

	if (tbox.length > 0) {
        assigned = assigned + tbox.options[i].value;
	}

	//document.forms[0].assigned.value = assigned;
}

function processSubmit(gbox)
{
	var i;
	for (i = 0; i < gbox.options.length; i++) {
    gbox.options[i].selected = true;
	}
}

function listEmail(){
  var emails = document.getElementById("emailAddress").value;
  prompt("Copy the email addresses below." + '\n\n' + "For Mac OS: Command+C" + '\n' + "For Windows: Control+C", emails);
}
