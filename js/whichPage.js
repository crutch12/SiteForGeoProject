
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

// function LoadData(fileName){
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
	//document.getElementsByTagName('head')[0].innerHTML = "";
// 	$( "#head" ).append( fileName + " #head", function() {
//   alert( "Load head was performed." );
// });
	
//     $( "#containerDiv" ).load( fileName + " #contentDiv", function() {
//   alert( "Load contentDiv was performed." );
// });

// $( "#containerDiv" ).load(fileName, function() {
//   alert( "Load contentDiv was performed." );
// });

   //  $.ajax({url: fileName, success: function(result){
   //          //$("#containerDiv").html(result);
   //  		//$('#head').html($(result).find('#head'));
    		
    		

   //  		var str = JSON.stringify(result);
   //  		//alert("html " + str);

   //  		//var html = str.replace(/[\n\t\r]/g,"");

			// var html = str.replace(/\\n|\\t|\\r|\\\u0022/gi, "");
			// //alert("without n t " + html);

   //  		var head = html.match(/<head[^>]*>[\s\S]*<\/head>/gi);
			// //alert("head " + head);

			// var oldHead = document.getElementsByTagName('head')[0].innerHTML;
			// document.getElementsByTagName('head')[0].innerHTML += head;

			// $('#containerDiv').html($(result).find('#contentDiv'));
   //      }});


    $(document).ready(function() {
    $('a').click(function() {
        var url = $(this).attr('href');

        $.ajax({
            url:     url + '?ajax=1',
            success: function(data){
                $('#containerDiv').html(data);
            }
        });

        // А вот так просто меняется ссылка
        if(url != window.location){
            window.history.pushState(null, null, url);
        }

        // Предотвращаем дефолтное поведение
        return false;
    });
});

    // document.getElementsByTagName("body")[0].reload();
	//var str = "Mr Blue has \n \t \n \t a blue house and a blue car";
	// var res = str.replace(/\n|\t/gi, "aaa");
// }



// var url = document.createElement('a');
// url.href = location.pathname;
// alert(url.pathname + url.search);
//}
