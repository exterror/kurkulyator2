document.addEventListener("DOMContentLoaded", () => {
    let buttons = document.querySelectorAll(".button");
    let output = document.querySelector(".display");
    let current = 0;
    let action = "";
    let actions = {
        "%": " % ",
        "÷": " / ",
        "X": " * ",
        "−": " - ",
        "+": " + "
    };

    for (let i in buttons) {
        buttons[i].onclick = function (e) {
            let input = e.target.innerText;
            let num = parseInt(input);
            if (isNaN(num)) {
                if (input === "AC") {
                    console.log("clear");
                    action = null;
                    current = 0;
                    output.innerText = 0;
                } else {
                    if (action && action !== "=") {
                        let calculation = current + actions[action] + output.innerText;
                        console.log("calculate", calculation);
                        output.innerText = eval(calculation);
                    }
                    current = parseInt(output.innerText);
                    action = input;
                }
            } else {
                if (current === parseInt(output.innerText)) {
                    output.innerText = num;
                } else {
                    output.innerText += num;
                }
            }
        };
    }
});
