// Exercice 2.2
function GetAddiction(){
	var nb_1 = document.getElementById('input1').value;
	var nb_2 = document.getElementById('input2').value;
	var result = eval(nb_1 + '+' + nb_2);
	document.getElementById('result-exo-2-2').innerHTML = result;
}
