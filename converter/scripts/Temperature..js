function appendData() {
    const dataFrom = ["Celsius", "Kelvin", "Réaumur",  "Fahrenheit"];
    const dataTo = ["Fahrenheit", "Celsius", "Kelvin", "Réaumur"];
    dataFrom.forEach((item) => {
      const fromOption = document.createElement("option");
      fromOption.value = item;
      fromOption.text = item;
      document.querySelector("#from").appendChild(fromOption);
    });
    dataTo.forEach((item) => {
      const toOption = document.createElement("option");
      toOption.value = item;
      toOption.text = item;
      document.querySelector("#to").appendChild(toOption);
    });
  }
  appendData();
  const temperatureConversions = {
    Celsius: {
      Fahrenheit: (number) => (number * 9/5) + 32,
      Kelvin: (number) => number + 273.15,
      Réaumur: (number) => number * 4/5,
    },
    Kelvin: {
      Fahrenheit: (number) => (number - 273.15) * 9/5 + 32,
      Celsius: (number) => number - 273.15,
      Réaumur: (number) => (number - 273.15) * 4/5,
    },
    Fahrenheit: {
      Celsius: (number) => (number - 32) * 5/9,
      Kelvin: (number) => (number - 32) * 5/9 + 273.15,
      Réaumur: (number) => (number - 32) * 4/9,
    },
    Réaumur: {
      Celsius: (number) => number * 5/4,
      Kelvin: (number) => number * 5/4 + 273.15,
      Fahrenheit: (number) => (number * 9/4) + 32,
    },
  };
  let from;
  let to;
  let unit;
  document.querySelector("#from").addEventListener("change", (e) => {
    from = e.target.value;
  });
  document.querySelector("#to").addEventListener("change", (e) => {
    to = e.target.value;7
    
  })
function getUnits(){
  switch(to){
    case "Fahrenheit":unit = "°F";break;
      case "Celsius": unit = "°C";break
      case "Kelvin":unit = "K";break;
          case "Réaumur": unit = "°R";break;
            default: unit = "°C";break;
  }
}
  document.querySelector(".convert").addEventListener("click", convert);
  function convert() {
    const numberInput = document.querySelector("input");
    const resultElement = document.querySelector("#result");
    if (numberInput.value > 0) {
      const number = parseFloat(numberInput.value);
      const conversionFunction = temperatureConversions[from]?.[to];
      getUnits();
      if (typeof conversionFunction === 'function') {
        const result = conversionFunction(number);
        resultElement.value = `${result.toFixed(2)}°${unit}`;
      }
      else if(from == undefined || to == undefined){
      const defaultOption = (number * 9/5) + 32;
        resultElement.value = `${defaultOption.toFixed(2)}${unit}`; 
      }
        else {
        resultElement.value = "Invalid conversion";
      }
    }
  }
  