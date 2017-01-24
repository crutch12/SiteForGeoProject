
var nav =  document.getElementById("navigation");
var links =  nav.getElementsByTagName("a");
var THref = location.href;
var count = links.length
for(var i=0; i<count; i++){
  if(links[i].href==THref){
  		links[i].parentElement.className += 'active'
	}
}
