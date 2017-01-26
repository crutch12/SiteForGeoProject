
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
					//links[i].parentElement.classList.remove(specName);
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

			var lastname = THref.href.substr(THref.href.lastIndexOf('#') + 1);
			//alert(lastname);
			LoadData(lastname);



            }
     }          
}

WhichPage();

//var currentMenuItem = document.getElementById("mainDiv");

function LoadData(fileName){
	// var request = new XMLHttpRequest();
	// request.open('GET', fileName);
	// request.onreadystatechange = function() {
	//     if (request.readyState == 4) {
	//         if (request.status == 200) {
	//             currentMenuItem.innerHTML = request.responseText;
	//         } else {
	//             alert('Сетевая ошибка, код: ' + request.status);
	//         }
	//     }
	// };
	// request.send(null);

//     $( "#containerHead" ).load( "map.html #head", function() {
//   alert( "Load head was performed." );
// });
	document.getElementsByTagName('head')[0].innerHTML = "";
// 	$( "#head" ).append( fileName + " #head", function() {
//   alert( "Load head was performed." );
// });
	
//     $( "#containerDiv" ).load( fileName + " #contentDiv", function() {
//   alert( "Load contentDiv was performed." );
// });

// $( "#containerDiv" ).load(fileName, function() {
//   alert( "Load contentDiv was performed." );
// });

    $.ajax({url: fileName, success: function(result){
    		$('#containerDiv').html($(result).find('#contentDiv'));
    		alert(fileName + " was performed");
        }});

    // document.getElementsByTagName("body")[0].reload();

}



// var url = document.createElement('a');
// url.href = location.pathname;
// alert(url.pathname + url.search);
//}
