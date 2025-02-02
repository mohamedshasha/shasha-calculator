const calculator = document.getElementById("calculator");
const displayArea = document.getElementById("display_area");
calculator.addEventListener('click', (e) => {
    if (e.target.textContent) {
        const value = e.target.textContent;

        switch (value) {
            case "c": 
                clear(); 
                break;

            case "=": 
                calculate();  
                break;

            case "Del": 
                deleteOneValue(); 
                break;

            default:
                addToDisplay(value); 
                break;
        }
    }
});

function clear() {
    displayArea.textContent = "";
}

function deleteOneValue() {
    displayArea.textContent = displayArea.textContent.slice(0, -1);
}

function addToDisplay(value) {
    displayArea.textContent += value;
}

function calculate() {
    try {
        displayArea.textContent = eval(displayArea.textContent); // حساب الناتج
    } catch (error) {
        displayArea.textContent = "Error!";
    }
}


function clear() {
    displayArea.textContent = "";
}

function addToDisplay(value) {
    displayArea.textContent += value;
}

function calculate() {
    try {
        displayArea.textContent = eval(displayArea.textContent);
    } catch (error) {
        displayArea.textContent = "Error!";
    }
}
