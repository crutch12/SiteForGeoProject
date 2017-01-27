function WhichPage(){
	var nav =  document.getElementById("navigation");

	var links =  nav.getElementsByTagName("a");

	var THref = window.location;
	var pageName = THref.pathname.substr(THref.pathname.lastIndexOf('/') + 1);

	var k = document.getElementsByTagName("li");

	var count = links.length;
	var specName = 'active';
	// alert(pageName);
	if (!pageName){
	var mainPage = document.getElementById('mainPage');
	mainPage.classList.add(specName);
	}else{
		for(var i=0; i<count; i++){
			if(links[i].href == THref){
				links[i].parentElement.classList.add(specName);
				}else{
					links[i].parentElement.classList.remove(specName);
				}
			}
		}        
}

WhichPage();