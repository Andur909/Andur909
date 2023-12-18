window.addEventListener("load",addListeners)

function addListeners()
{
	document.getElementById("btncalculator").addEventListener("click",calculation);
	document.getElementById("btnquizloops").addEventListener("click",quizloops);
}

function calculation()
{
	window.location.href = "CalculatorIndex.html"
}

function quizloops()
{
	window.location.href = "Quiz.html";
}