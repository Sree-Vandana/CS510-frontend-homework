const input = document.querySelector('input');
const result = document.getElementById("result");

input.addEventListener('input', updateValue);

function updateValue(e) {
  var input_val = input.value;
  var deci_point = (input_val - Math.floor(input_val)) !== 0;
  
  if(typeof input_val[input_val.length-1] === "undefined" || parseInt(input_val)<0 || deci_point){
    result.innerHTML = "Please enter valid positive number";
  }
  else if(isPalindrom(input_val))
    result.innerHTML = `<span style="color:green;">Yes, This is a palindrome!</span>`;
  else
    result.innerHTML = `<span style="color:red;">No, Try again.</span>`;
}

function isPalindrom(in_str){
  var reverse_in_str = in_str.split("").reverse().join("");
  return in_str === reverse_in_str;
}