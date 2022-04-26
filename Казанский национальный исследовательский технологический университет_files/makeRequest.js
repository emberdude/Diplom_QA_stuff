function makeRequest(url, whatfill) {
	var httpRequest;
        var wf = whatfill ;

	if (window.XMLHttpRequest) { // Mozilla, Safari, ...
		httpRequest = new XMLHttpRequest();
		if (httpRequest.overrideMimeType) {
			httpRequest.overrideMimeType('text/xml');
			// See note below about this line
		}
	} 
	else if (window.ActiveXObject) { // IE
		try {
			httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} 
		catch (e) {
			try {
				httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} 
			catch (e) {}
		}
	}

	if (!httpRequest) {
		alert('Невозможно создать экземпляр XMLHTTP');
		return false;
	}

	httpRequest.onreadystatechange = function() { outputContents(httpRequest, wf); }  
	httpRequest.open('GET', url, true);
	httpRequest.send('');

}

function outputContents(httpRequest, whatfill) {
try {
	if (httpRequest.readyState == 4) {
		if (httpRequest.status == 200) {
			

                   window.parent.document.getElementById( whatfill ).innerHTML = httpRequest.responseText ;


		} else {
			alert('request problem');
		}
	}
     }
catch( e ) {
		alert('error: ' + e.description);
	}
}