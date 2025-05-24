function output_sum(){
  let number_1 = parseFloat(window.document.getElementById("a1").value);
  let number_2 = parseFloat(window.document.getElementById("b1").value);
  console.log(number_1 + number_2);
  Total = number_1 + number_2;
  window.document.querySelector("h1").innerHTML = Total; 
}

function output_sub(){
  let number_1 = parseFloat(window.document.getElementById("a1").value);
  let number_2 = parseFloat(window.document.getElementById("b1").value);
  console.log(number_1 - number_2);
   Total = number_1 - number_2;
  window.document.querySelector("h1").innerHTML = Total;
}

function output_mult(){
  let number_1 = parseFloat(window.document.getElementById("a1").value);
  let number_2 = parseFloat(window.document.getElementById("b1").value);
  console.log(number_1 * number_2);
  Total = number_1 * number_2;
  window.document.querySelector("h1").innerHTML = Total;
 }

 function output_div() {
  let number_1 = parseFloat(window.document.getElementById("a1").value);
  let number_2 = parseFloat(window.document.getElementById("b1").value);
  console.log(number_1 / number_2);
  Total = number_1 / number_2;
  window.document.querySelector("h1").innerHTML = Total;
 }
