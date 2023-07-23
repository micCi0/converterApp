function calculator() {
    const buttons = document.querySelectorAll(".keyboard button");
    const output = document.getElementById("output-value");
    const history = document.getElementById("history-value");
    let firstNumber = "";
    let operator = "";
    let secondNumber = "";
    document.getElementById("clean").onclick = function(){
       firstNumber = "";
       secondNumber = "";
       output.textContent = firstNumber
        history.textContent = secondNumber;
    }
    document.getElementById("back").onclick = function(){
        
       const array = firstNumber.split("");
       array.shift();
       firstNumber = array.toString();
        output.textContent = firstNumber
    }
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const buttonText = button.textContent;

        if (buttonText.match(/[0-9]/)) {
      
          if (!operator) {
        
            firstNumber += buttonText;
            output.textContent = firstNumber;
          } else {
           
            secondNumber += buttonText;
            output.textContent = secondNumber;
          }
        } else if (buttonText === "+") {
          if (firstNumber && !operator) {
           
            operator = buttonText;
            history.textContent = `${firstNumber} ${operator}`;
          }
        
        }
        
        else if (buttonText === "-") {
          
            if (firstNumber && !operator) {
           
              operator = buttonText;
              history.textContent = `${firstNumber} ${operator}`;
            }
          }
          else if (buttonText === "×") {
         
            if (firstNumber && !operator) {
             
              operator =buttonText
              history.textContent = `${firstNumber} ${operator}`;
            }
          }
          else if (buttonText === "÷") {
         
            if (firstNumber && !operator) {
             
              operator =buttonText
              history.textContent = `${firstNumber} ${operator}`;
            }
          }
          else if (buttonText === "LOG") {
         
            if (firstNumber && !operator) {
             
              operator =buttonText
              history.textContent = `${firstNumber} ${operator}`;
            }
          }
          else if (buttonText ==="E") {
            
          
            if (firstNumber && !operator) {
             
              operator =buttonText
              history.textContent = `${firstNumber} ${operator}`;
            }
          }
          else if (buttonText ==="%") {
            
            
            if (firstNumber && !operator) {
             
              operator =buttonText
              history.textContent = `${firstNumber} ${operator}`;
            }
          }
        
           else if (buttonText === "=") {
            if (firstNumber && operator && secondNumber) {
                let result;
            
              switch(operator){
                case "+":
                    result = parseFloat(firstNumber) + parseFloat(secondNumber);
                    break;
                 case "-":
                    result = parseFloat(firstNumber) - parseFloat(secondNumber);
                    break;
                  case "×":
                    result = parseFloat(firstNumber) * parseFloat(secondNumber);
                    break;
                    case "÷":
                        result = parseFloat(firstNumber) / parseFloat(secondNumber);
                        break;
                        case "LOG":
                            result =  Math.log10(parseFloat(firstNumber) + parseFloat(secondNumber)) * Math.E;
                            break;  
                         case "E":
                            result = parseFloat(firstNumber) + parseFloat(secondNumber) * Math.E;
                            break;
                          case "%":
                                result =   parseFloat(firstNumber) % parseFloat(secondNumber) ;
                            break



              }
              output.textContent = result;
              history.textContent = `${firstNumber} ${operator} ${secondNumber} =`;
              
              firstNumber = result.toString();
              secondNumber = "";
              operator = "";
            }
          }
      });
    });
  }

addEventListener("DOMContentLoaded", calculator);