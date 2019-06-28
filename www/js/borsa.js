  
  $(document).ready(function() {
 var ulke = ["CAD","HKD","ISK","PHP","DKK","HUF","CZK","GBP","RON","SEK","IDR","INR","BRL","RUB","THB","HRK","JPY","CHF","EUR","CNY","BGN","MYR","TRY","NOK","NZD","ZAR","USD","MXN","SGD","AUD","ILS","KRW","PLN"];


  $.each(ulke, function(key, val) {
        ulke.push("<option value="+key+">"+val+"</option>");
    });

              

        $("<select>", {
        "class": "sectik",
        html: ulke.join("")
    }).appendTo("#ilk");

        $("<select>", {
        "id": "sectik",
        html: ulke.join("")
    }).appendTo("#iki");

$('.sectik').change(function () {
	 $("div.borsa").empty();
        var value = $( ".sectik option:selected" ).text();
 		var value2 = $( "#sectik option:selected" ).text();
    $.getJSON("https://api.exchangeratesapi.io/latest?base="+value+"", function(data) {

    var items = [];
	
	
    $.each(data.rates, function(key, val) {
        items.push("<p>"+key+":"+val+"<p>");
});

        $("<div>", {
        "class": "row",
        html: items.join("")
    }).appendTo(".borsa");

    

});

});



});



 $(".brand-logo").click(function() {
        location.reload();
 });






 $('#hesapla').click(function(){
 	var value = $( ".sectik option:selected" ).text();
    var req_url = "https://api.exchangeratesapi.io/latest?base="+value;
 $.getJSON(req_url, function(paracık) {
    var value2 = $( "#sectik option:selected" ).text();
 	
 	  
 	var obj = paracık.rates[value2];
	
    console.log(obj);


});

});