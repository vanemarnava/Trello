
//mostrar
var addList = document.getElementById("inputAddList");

addList.addEventListener("click",function()
{
	document.getElementById("inputAddList").classlist.add("after");
	document.getElementById("addNameAssig").classList.remove("hidden");
});

//esconder
var close = document.getElementById("close1");

close.addEventListener("click",function()
{
	document.getElementById("secAddList").classList.remove("after");
	document.getElementById("inputAddList").classList.add("hidden");
});
