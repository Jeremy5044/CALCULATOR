var answer = document.getElementById("answer")
var button = document.getElementById("calculate-button")


var Num = function (){
	var textone = document.getElementById("value-one")
	var texttwo = document.getElementById("value-two")

	var sum = Number(textone.value) + Number(texttwo.value);
	answer.innerHTML=sum;
};
button.addEventListener("click", Num);