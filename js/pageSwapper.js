function WhichPage() {
    var nav = document.getElementById("navigation");

    var links = nav.getElementsByTagName("a");

    var THref = window.location;
    var pageName = GetPageName();

    var count = links.length;
    var specName = 'active';

    if (!pageName) {

        for (var i = 0; i < count; i++) {
            links[i].parentElement.classList.remove(specName);
        }

        var mainPage = document.getElementById('mainPage');
        mainPage.classList.add(specName);
        mainPage.blur();
    } else {
        for (var i = 0; i < count; i++) {
            if (links[i].href == THref) {
                links[i].parentElement.classList.add(specName);
                links[i].blur()
            } else {
                links[i].parentElement.classList.remove(specName);
            }
        }
    }
}

function GetPageName() {
    var THref = window.location;
    var pageName = THref.pathname.substr(THref.pathname.lastIndexOf('/') + 1);

    return pageName;
}

$(document).ready(function () {
    WhichPage();

    // $(".nav li.disabled a").click(function() {
    //     return false;
    // });

    $('a').click(function () {
        var url = $(this).attr('href');

        if (GetPageName() == url){
            return false;
        }

        $.ajax({
            url: url + '?ajax=1',
            success: function (result) {
                SetHtmlContent(result);
                // HideLoading();
            }
        });

        if (url != window.location) {
            window.history.pushState(null, null, url);
        }

        WhichPage();
        StopTimer(GetPageName());

        return false;
    });


});

$(window).bind('popstate', function () {
    WhichPage();
    StopTimer(GetPageName());
    $.ajax({
        url: location.pathname + '?ajax=1',
        success: function (result) {
            SetHtmlContent(result);
        }

    });
});

function SetHtmlContent(result) {
    var str = JSON.stringify(result);
    var html = str.replace(/\\n|\\t|\\r|\\\u0022/gi, "");
    var title = html.match(/<title[^>]*>([^<]+)<\/title>/)[0];
    var doc = $($.parseXML(title));
    var textTitle = doc.find('title').text();
    document.getElementsByTagName('title')[0].innerHTML = textTitle;
    $('#containerDiv').html($(result).find('#contentDiv'));
}