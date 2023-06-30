function getValue(){
let temp = document.getElementById('input');
let value = temp.value;
return value;
}
function convertToCelsius(){
    let celsius = (getValue() - 32) * 5/9;
    document.getElementById("demo").innerHTML = `${celsius} C`;
}

function convertToFahrenheit(){
  let fahrenheit = (getValue() * 9/5) + 32;
  document.getElementById("demo").innerHTML = `${fahrenheit} F`;
}
