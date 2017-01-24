
var nav =  document.getElementById("navigation");

var links =  nav.getElementsByTagName("a");

var THref = location.href;

var pageName = THref.substr(THref.lastIndexOf('/') + 1);
var count = links.length;

var specName = ' active';

if (!pageName){
	var mainPage =  document.getElementById("mainPage");
	mainPage.className += specName;
	}else{
		for(var i=0; i<count; i++){
	  		if(links[i].href == THref){
	  			links[i].parentElement.className += specName;
		}
	}
}

// var url = document.createElement('a');
// url.href = location.pathname;
// alert(url.pathname + url.search);
//}
