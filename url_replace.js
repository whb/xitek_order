function url_replace() {
	var links = document.getElementsByTagName("a");
	for(var i = 0; i<links.length; i++) {
		if (links[i].href.indexOf('http://forum.xitek.com/showthread.php') > -1) {
			links[i].href = links[i].href.replace ("showthread.php", "sorthread.php"); 
		}
	}
}

url_replace();
