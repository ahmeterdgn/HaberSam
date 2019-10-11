  
  $(document).ready(function() {
 var ulke = ["TRY","USD","HKD","ISK","PHP","DKK","HUF","CZK","GBP","RON","SEK","IDR","INR","BRL","RUB","THB","HRK","JPY","CHF","EUR","CNY","BGN","MYR","CAD","NOK","NZD","ZAR","MXN","SGD","AUD","ILS","KRW","PLN"];


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

$('#degerler').click(function () {
	 $("tbody.borsa").empty();

 	var value = $( ".sectik option:selected" ).text();
    $.getJSON("https://api.exchangeratesapi.io/latest?base="+value+"", function(data) {

    var items = [];
	
	
    $.each(data.rates, function(key, val) {
        items.push("<tr><td>"+key+"</td>"+"<td>"+val.toFixed(2)+"</td></tr>");
        
        
});


 $(".borsa").append(items);
    

});

});



});



 $(".brand-logo").click(function() {
        location.reload();
 });






 $('#hesapla').click(function(){
    var para = document.getElementById("para").value;
    console.log(para);

    if (para == null || para == ""){
    $(".cıkan").text(0);

}else{
    var value = $( ".sectik option:selected" ).text();
    var req_url = "https://api.exchangeratesapi.io/latest?base="+value;
    $.getJSON(req_url, function(paracık) {
    var value2 = $( "#sectik option:selected" ).text();
    var obj = paracık.rates[value2];
    çarp=para*obj;
    sonuc= Number(çarp.toFixed(2));


    $(".cıkan").text(sonuc+" "+value2);


});

}



});