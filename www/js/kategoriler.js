$(".secildi").click(function() {
	var ID = $(this).attr("id");
	var name= ID.text();
	var lastname= localStorage.setItem(ID,name);
	alert(localStorage.getItem(ID));
});
$("#sil").click(function(){
//var lastname=	localStorage.removeItem("lastname");
alert(localStorage.getItem(ID));
})