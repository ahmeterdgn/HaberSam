let detayligorunum = 0 ;
let ifarmedencik = 0 ;
let colum=0;
let list=0;
$(".colum").click(function(){
   
      colum = 0;
      list = 1;
    console.log(colum);

});
$(".list").click(function(){
   
      list = 0;
      colum = 1;
    console.log(list);

});


$.getJSON("https://newsapi.org/v2/top-headlines?country=tr&apiKey=22c28c8658b14ed7b70a89f54011d392", function(data) {
    var items = [];
    $.each(data.articles, function(key, val) {
        items.push("<div class='col s6'><a class='link' id='" + key + "' href='#" + key + "'>"+
      "<div class='card'>"+
        "<div class='card-image'>"+
          "<img src='" + val.urlToImage + "'>"+
        "</div>"+
       "<div class='card-content'>"+
       "<span class='card-title flow-text'>"+ val.title.substring(0, 60)+ "..."+"</span><p></p></div></div></div> </a> </div>"

        );

    });
     $("#webpage").hide();
            
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

                 window.plugins.socialsharing.share('HaberSam App:', 'HaberSam App:',null, data.articles[ID].url);
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


 $(".brand-logo").click(function() {
 		location.reload();
 });




document.addEventListener("backbutton", onBackKeyDown, false);

function onBackKeyDown() { //geri butonu
    if(detayligorunum){
        if (colum) {$(".colum").show();}else if(list){$(".list").show();}
        $("button:hidden").show("slow");
        $("div.haberdetay:hidden").show("slow");
        $(".haberler").show();
        $(".haberbaslik").text("");
        $(".haberaciklama").text("");
         $("#haberlink").hide();
        $("#haberresim").attr("src", "");
        $("a.icerik").hide();
       
        //$("#haberlink").attr("href",data.articles[ID].url);
    }
    if(ifarmedencik){
        $("div.haberdetay:hidden").show("slow");
        $(".haberler").show();
        $(".haberbaslik").text("");
        $(".haberaciklama").text("");
        $("#haberlink").hide();
        $("#ifarme").attr("src", "");
        $("#haberresim").attr("src", "");
        $("#ifarme").hide();
        $("a.icerik").hide();
    }
}


               


//<img src='" + val.urlToImage + "' class='img'> <a href='#" + key + "'><li id='" + key + "' class='list'>" + val.title + "</li> </<>"
/*

            <div class='col-6'><a class='link' id='" + key + "' href='#" + key + "'><div class='card' style=' border-radius:20px;margin-top:70px;'>" +
            "<img src='" + val.urlToImage + "' class='card-img-top' alt='" + key + "'>" +
            "<div class='card-body'><h5 class='card-title'>" + val.title + "</h5></div></div></a></div>"
            */

