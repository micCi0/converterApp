document.getElementById("randomBtn").addEventListener("click" ,() => randomNumber())
const result = document.getElementById("randomResult")
function randomNumber(){
    let firstNumber = document.getElementById("minNum").value
    let secondNumber = document.getElementById("maxNum").value;
     if(firstNumber<=0 && secondNumber <=0) return;
    let random = Math.floor(Math.random() * (secondNumber - firstNumber + 1) + firstNumber)
  
    document.getElementById("control").style.display = "block"
    result.textContent = random;
}
document.getElementById("copyNumber").addEventListener("click" , () =>{
    navigator.clipboard.writeText(result.textContent)
    document.getElementById("control").style.display = "none"
})
document.getElementById("bmiCalc").onclick = function(){
    let weight = document.getElementById("weight").value;
    let heiht = document.getElementById("height").value
    if(weight<=0 || heiht<=0) return;
    const bmi = weight/(heiht * heiht);
    document.getElementById("bmiRes").textContent = bmi

}
document.getElementById("logCalculate").onclick = function(){
    let logNumber = document.getElementById("logNumber").value;
    let eNumber = document.getElementById("eNumber").value;
    if(logNumber>=1 && eNumber>=1){
          let result = Math.log10(logNumber) * eNumber;
          document.getElementById("logControl").style.display = "block"
        document.getElementById("logResult").textContent = result
    }
}
document.getElementById("copyLog").onclick = function(){
    let text =   document.getElementById("logResult").textContent
    navigator.clipboard.writeText(text)
    document.getElementById("logControl").style.display = "none"
}
// JavaScript
let from, to;

document.getElementById("from").addEventListener("change", (e) => {
  from = e.target.value;
});

document.getElementById("to").addEventListener("change", (e) => {
  to = e.target.value;
});

document.getElementById("convert-system").onclick = function () {
  let decimalNumber = document.getElementById("decimal").value;
  if (decimalNumber > 0) {
    systemConvert(decimalNumber);
  } else {
    alert("Invalid input");
  }
};

function systemConvert(decimalNumber) {
  let result;

  if (from === "decimal" && to === "binary" || from == undefined || to == undefined) {
    result = (decimalNumber >>> 0).toString(2); // Convert to unsigned 32-bit and then to binary
  } else if (from === "decimal" && to === "octal") {
    result = decimalNumber.toString(8);
  } else if (from === "decimal" && to === "hex") {
    result = decimalNumber.toString(16);
  } else if (from === "binary" && to === "decimal") {
    result = parseInt(decimalNumber, 2);
  } else if (from === "octal" && to === "decimal") {
    result = parseInt(decimalNumber, 8);
  } else if (from === "hex" && to === "decimal") {
    result = parseInt(decimalNumber, 16);
  } else {
    // If 'from' and 'to' are the same or not supported combination
    result = "Invalid conversion";
  }
  document.getElementById("controlSys").style.display = "block";
  document.getElementById("resultText").textContent = result;
}
document.getElementById("sysCopy").onclick = function(){
    let text =  document.getElementById("resultText").textContent  
    navigator.clipboard.writeText(text)
    document.getElementById("controlSys").style.display = "none";
}
