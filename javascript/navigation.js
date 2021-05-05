/*
* I want to put most code involving navigation in here I think
*/

function openTab(evt, tabName) {
	var i, tabcontent, tablinks;

	if(document.getElementById(tabName).style.display == 'block') {
		tabcontent = document.getElementsByClassName('tabcontent');
		for (i=0;i<tabcontent.length;i++){
			tabcontent[i].style.display='none';
		}

		tablinks = document.getElementsByClassName('tablinks');
		for(i=0;i<tablinks.length;i++) {
			tablinks[i].className = tablinks[i].className.replace("active", "");
		}
	} else {
		tabcontent = document.getElementsByClassName('tabcontent');
		for (i=0;i<tabcontent.length;i++){
			tabcontent[i].style.display='none';
		}

		tablinks = document.getElementsByClassName('tablinks');
		for(i=0;i<tablinks.length;i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}

		
		document.getElementById(tabName).style.display = 'block';
		evt.currentTarget.className += ' active';
	}
}