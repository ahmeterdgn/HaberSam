$(".colum").click(function(){
   

    $(".colum").hide();
    $(".list").show();
     $("div.haberler").empty();
$.getJSON("https://newsapi.org/v2/top-headlines?country=tr&apiKey=22c28c8658b14ed7b70a89f54011d392", function(data) {
    var items = [];
    $.each(data.articles, function(key, val) {
        items.push("<div class='col s6'><a class='link' id='" + key + "' href='#" + key + "'>"+
      "<div class='card'>"+
        "<div class='card-image'>"+
          "<img src='" + val.urlToImage + "'>"+
        "</div>"+
       "<div class='card-content'>"+
       "<span class='card-title flow-text'>"+ val.title.substring(0, 50)+ "..."+"</span><p></p></div></div></div> </a> </div>"

        );

    });

    $("<div>", {
        "class": "row",
        html: items.join("")
    }).appendTo("div.haberler");


    $(document).ready(function() {


        setTimeout(function() { //0.5 saniyede yüklendikten sonra 

            $(".link").click(function() {

                var ID = $(this).attr("id");
                $("#haberlink").show("slow");
                $(".haberler").hide();
                $(".giris").hide();
                $("#haberresim").attr("src", data.articles[ID].urlToImage);
                $(".haberbaslik").append(data.articles[ID].title);
                $(".haberaciklama").append(data.articles[ID].description);
                $(".site").attr("href",data.articles[ID].url);
                $(".paylas").click(function() {
                 window.plugins.socialsharing.share('HaberSam App:', 'HaberSam App:', null, data.articles[ID].url);
                                });
                $("button:hidden").show("slow");
                $("div.haberdetay:hidden").show("slow");
                $("a.icerik:hidden").show("slow");
                detayligorunum = 1;
                setTimeout(function() {
                    $("#ifarme").attr("src", data.articles[ID].url);
                    $("#haberlink").click(function() {
                    $(".haberdetay").hide();
                    $("#ifarme:hidden").show("fast");
                    ifarmedencik = 1 ;
  

                    });

                }, 500);




            });




        }, 500);
    });
});
});
$(".list").click(function(){


    $(".list").hide();
    $(".colum").show();
    $("div.haberler").empty();
$.getJSON("https://newsapi.org/v2/top-headlines?country=tr&apiKey=22c28c8658b14ed7b70a89f54011d392", function(data) {
    var items = [];
    $.each(data.articles, function(key, val) {
        items.push(
           // "<li><a class='link' id='" + key + "' href='#" + key + "'><img src='" + val.urlToImage + "' class='listimg'>"+val.title+"</a></li>"
       "<div class='card atla col s12'><a class='link' id='" + key + "' href='#" + key + "'>"+ 
      "<div class='col s7'>"+ val.title + "</div>"+
      "<div class='col s5 ' ><img src='" + val.urlToImage + "' class='resimli'></div></a></div>"
    
        );

    });

    $("<div>", {
        "class": "row",
        html: items.join("")
    }).appendTo("div.haberler");

    $(document).ready(function() {


        setTimeout(function() { //0.5 saniyede yüklendikten sonra 

            $(".link").click(function() {

                var ID = $(this).attr("id");
                $("#haberlink").show("slow");
                $(".haberler").hide();
                $(".giris").hide();
                $("#haberresim").attr("src", data.articles[ID].urlToImage);
                $(".haberbaslik").append(data.articles[ID].title);
                $(".haberaciklama").append(data.articles[ID].description);
                $(".site").attr("href",data.articles[ID].url);
                $(".paylas").click(function() {
                 window.plugins.socialsharing.share('HaberSam App:', 'HaberSam App:', null, data.articles[ID].url);
                                });
                $("button:hidden").show("slow");
                $("div.haberdetay:hidden").show("slow");
                $("a.icerik:hidden").show("slow");
                detayligorunum = 1;
                setTimeout(function() {
                    $("#ifarme").attr("src", data.articles[ID].url);
                    $("#haberlink").click(function() {
                    $(".haberdetay").hide();
                    $("#ifarme:hidden").show("fast");
                    ifarmedencik = 1 ;
  

                    });

                }, 500);




            });




        }, 500);
    });
});
});
$(".colum").click(function(){
   

    $(".colum").hide();
    $(".list").show();
     $("div.haberler").empty();
$.getJSON("https://newsapi.org/v2/top-headlines?country=tr&apiKey=22c28c8658b14ed7b70a89f54011d392", function(data) {
    var items = [];
    $.each(data.articles, function(key, val) {
        items.push("<div class='col s6'><a class='link' id='" + key + "' href='#" + key + "'>"+
      "<div class='card'>"+
        "<div class='card-image'>"+
          "<img src='" + val.urlToImage + "'>"+
        "</div>"+
       "<div class='card-content'>"+
       "<span class='card-title flow-text'>"+ val.title.substring(0, 50)+ "..."+"</span><p></p></div></div></div> </a> </div>"

        );

    });

    $("<div>", {
        "class": "row",
        html: items.join("")
    }).appendTo("div.haberler");


    $(document).ready(function() {


        setTimeout(function() { //0.5 saniyede yüklendikten sonra 

            $(".link").click(function() {

                var ID = $(this).attr("id");
                $("#haberlink").show("slow");
                $(".haberler").hide();
                $(".giris").hide();
                $("#haberresim").attr("src", data.articles[ID].urlToImage);
                $(".haberbaslik").append(data.articles[ID].title);
                $(".haberaciklama").append(data.articles[ID].description);
                $(".site").attr("href",data.articles[ID].url);
                $(".paylas").click(function() {
                 window.plugins.socialsharing.share('HaberSam App:', 'HaberSam App:', null, data.articles[ID].url);
                                });
                $("button:hidden").show("slow");
                $("div.haberdetay:hidden").show("slow");
                $("a.icerik:hidden").show("slow");
                detayligorunum = 1;
                setTimeout(function() {
                    $("#ifarme").attr("src", data.articles[ID].url);
                    $("#haberlink").click(function() {
                    $(".haberdetay").hide();
                    $("#ifarme:hidden").show("fast");
                    ifarmedencik = 1 ;
  

                    });

                }, 500);




            });




        }, 500);
    });
});
});