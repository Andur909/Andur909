window.addEventListener("load",addListeners)

function addListeners()
{
	document.getElementById("btncalculator").addEventListener("click",calculation)
}

function calculation()
{
	window.location.href = "CalculatorIndex.html"
}