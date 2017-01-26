
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

			//var lastname = THref.href.substr(THref.href.lastIndexOf('#') + 1);
			//alert(lastname);
			//LoadData(THref.href);



            }
     }          
}

WhichPage();

// function LoadData(url){

// 	var fileName = url.substr(url.lastIndexOf('#') + 1);

//     $.ajax({url: fileName, success: function(result){

//     		var str = JSON.stringify(result);
// 			var html = str.replace(/\\n|\\t|\\r|\\\u0022/gi, "");
//     		var title = html.match(/<title[^>]*>([^<]+)<\/title>/)[0];
//     		var doc = $($.parseXML(title));
// 			var textTitle = doc.find('title').text();
// 			document.getElementsByTagName('title')[0].innerHTML = textTitle;

// 			$('#containerDiv').html($(result).find('#contentDiv'));
//         }});


// }

$(document).ready(function() {
    $('a').click(function() {
        var url = $(this).attr('href');

        $.ajax({
            url:     url + '?ajax=1',
            success: function(data){
                $('#containerDiv').html($(data).find('#contentDiv'));
            }
        });

        // А вот так просто меняется ссылка
        if(url != window.location){
            window.history.pushState(null, null, url);
        }

        WhichPage();

        // Предотвращаем дефолтное поведение
        return false;
    });
});

$(window).bind('popstate', function() {
    $.ajax({
        url:     location.pathname + '?ajax=1',
        success: function(data) {
            $('#containerDiv').html($(data).find('#contentDiv'));
        }
    });
});

// $(window).bind('popstate', function() {
// 	$.ajax({
//     	url:     location.pathname + '?ajax=1',
//     	success: function(result) {

//     	var str = JSON.stringify(result);
// 		var html = str.replace(/\\n|\\t|\\r|\\\u0022/gi, "");
// 		var title = html.match(/<title[^>]*>([^<]+)<\/title>/)[0];
// 		var doc = $($.parseXML(title));
// 		var textTitle = doc.find('title').text();
// 		document.getElementsByTagName('title')[0].innerHTML = textTitle;

// 		$('#containerDiv').html($(result).find('#contentDiv'));
       	 
//     	}
// 	});
// });