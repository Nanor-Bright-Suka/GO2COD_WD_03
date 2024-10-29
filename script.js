

const inputBox = document.getElementById("inputBox");


const clr = () => {
    inputBox.value = "";
}

const appendToInputBox = (input) => {
    inputBox.value += input;
}

const results = () => {
    try{
        const evalValue = eval(inputBox.value);
     inputBox.value = `${inputBox.value} = ${evalValue}`;
    
        if(!isFinite(evalValue))
        throw new Error("Oops")
    } catch(error){
        inputBox.value = error.message;
    }
}


   dell = () => {
    inputBox.value = inputBox.value.toString().slice(0,-1);
   }