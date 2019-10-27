let detayligorunum = 0 ;
let ifarmedencik = 0 ;
    $("select").change(function() {
        $("div.haberler").empty();
        $("div.haberdetay:hidden").show("fast");
        $(".haberler").show();
        $(".haberbaslik").text("");
        $(".haberaciklama").text("");
        $("#haberlink").hide();
        $("#ifarme").attr("src", "");
        $("#haberresim").attr("src", "");
        $("#ifarme").hide();
     var value = $( ".sectik option:selected" ).text();
    $.getJSON("https://newsapi.org/v2/everything?domains="+value+"&apiKey=22c28c8658b14ed7b70a89f54011d392", function(data) {
    var items = [];
    $.each(data.articles, function(key, val) {
        items.push("<div class='col s6'><a class='link' id='" + key + "' href='#" + key + "'>"+
      "<div class='card'>"+
        "<div class='card-image'>"+
          "<img src='" + val.urlToImage + "' height='130' width='400'>"+
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
                $("#haberresim").attr("src", data.articles[ID].urlToImage);
                $(".haberbaslik").append(data.articles[ID].title);
                $(".haberaciklama").append(data.articles[ID].description);
                //$("#haberlink").attr("href",data.articles[ID].url);
                $("button:hidden").show("slow");
                $("div.haberdetay:hidden").show("slow");
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
        $("button:hidden").show("slow");
        $("div.haberdetay:hidden").show("slow");
        $(".haberler").show();
        $(".haberbaslik").text("");
        $(".haberaciklama").text("");
         $("#haberlink").hide();
        $("#haberresim").attr("src", "");
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
    }
}


//<img src='" + val.urlToImage + "' class='img'> <a href='#" + key + "'><li id='" + key + "' class='list'>" + val.title + "</li> </<>"
});

