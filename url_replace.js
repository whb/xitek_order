function url_replace() {
	var links = document.getElementsByTagName("a");
	var replaced = false;
	for(var i = 0; i<links.length; i++) {
		if (links[i].href.indexOf('http://forum.xitek.com/showthread.php') > -1) {
			links[i].href = links[i].href.replace ("showthread.php", "sorthread.php"); 
			replaced = true;
		}
	}
	if (replaced)
		chrome.extension.sendRequest({}, function(response) {});
}

url_replace();
