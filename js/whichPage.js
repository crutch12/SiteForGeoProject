
function WhichPage(){
	var nav =  document.getElementById("navigation");

	var links =  nav.getElementsByTagName("a");

	//var THref = location.href;
	//var pageName = THref.substr(THref.lastIndexOf('/') + 1);

	var THref = location.href;
	var pageName = THref.substr(THref.lastIndexOf('/') + 1);

	var k = document.getElementsByTagName("li");

	var count = links.length;
	var specName = 'active';

	if (!pageName){
	var mainPage = document.getElementById("mainPage");
	mainPage.classList.add(specName);
	}else{
		for(var i=0; i<count; i++){
			if(links[i].href == THref){
				links[i].parentElement.classList.add(specName);
				//links[i].style.backgroundColor = 'yellow';
				}else{
					links[i].parentElement.classList.remove(specName);
				}
			}
		}
     
	for(var i = 0; i < k.length; i++){
		k[i].onclick = function (){
			THref = this.getElementsByTagName('a')[0];
			pageName = THref.href.substr(THref.href.lastIndexOf('/') + 1);

			//alert(pageName);
			             
			if (!pageName){
				var mainPage = document.getElementById("mainPage");
				mainPage.classList.add(specName);
				}else{
					for(var i=0; i<count; i++){
					  	if(links[i].href == THref){
					  		links[i].parentElement.classList.add(specName);
					  		//links[i].style.backgroundColor = 'yellow';
						}else{
							links[i].parentElement.classList.remove(specName);
						}
					}
				}
            }
     }          

	

	//alert(pageName);
}
	//alert(pageName);
WhichPage();

// var url = document.createElement('a');
// url.href = location.pathname;
// alert(url.pathname + url.search);
//}
