const dataFrom = ["Meter" , "Kilometer" , "Centimeter" , "Milimeter"];
const dataTo = ["Meter" , "Kilometer" , "Centimeter" , "Milimeter"];
const from = document.getElementById("from");
dataFrom.forEach((item) =>{
    const first = document.createElement("option");
    first.textContent = item;
    first.value = item;
    from.appendChild(first)
})
const to = document.getElementById("to");
dataTo.forEach((item) =>{
    const second = document.createElement("option");
   second.textContent = item;
    second.value = item;
to.appendChild(second)
})
let fromUnits,toUnits;
from.addEventListener("change" , (e) =>{
fromUnits = e.target.value;
})
to.addEventListener("change" , (e) =>{
    toUnits = e.target.value;
})
let unit;
function getUnits(){
    switch(toUnits){
        case "Meter":
            unit = "m";
            break
         case "Kilometr":
            unit = "km";
            break;
          case "Centimeter":
            unit = "cm";
            break
          case "Milimeter":
          unit = "mm"  ;
          break;
          case undefined:
            unit = "m";
            break

    }
}
document.getElementById("convert-btn").onclick = function(){
    let number = document.getElementById("input-value").value;
    let inputValue = parseFloat(number);
    getUnits();
    (inputValue>0.1) ? convert(inputValue) : alert("Invalid");
   
}
function convert(inputValue){
    if (fromUnits === "Meter" && toUnits === "Kilometer" || fromUnits == undefined ||toUnits == undefined) {
        result = inputValue / 1000;
    } else if (fromUnits === "Meter" && toUnits === "Centimeter") {
        result = inputValue * 100;
    } else if (fromUnits === "Meter" && toUnits === "Millimeter") {
        result = inputValue * 1000;
    } else if (fromUnits === "Kilometer" && toUnits === "Meter") {
        result = inputValue * 1000;
    } else if (fromUnits === "Kilometer" && toUnits === "Centimeter") {
        result = inputValue * 100000;
    } else if (fromUnits === "Kilometer" && toUnits === "Millimeter") {
        result = inputValue * 1000000;
    } else if (fromUnits === "Centimeter" && toUnits === "Meter") {
        result = inputValue / 100;
    } else if (fromUnits === "Centimeter" && toUnits === "Kilometer") {
        result = inputValue / 100000;
    } else if (fromUnits === "Centimeter" && toUnits === "Millimeter") {
        result = inputValue * 10;
    } else if (fromUnits === "Millimeter" && toUnits === "Meter") {
        result = inputValue / 1000;
    } else if (fromUnits === "Millimeter" && toUnits === "Kilometer") {
        result = inputValue / 1000000;
    } else if (fromUnits === "Millimeter" && toUnits === "Centimeter") {
        result = inputValue / 10;
    } else {
        result = inputValue;
    }
    document.getElementById("result").textContent = `${result}${unit}`  
}