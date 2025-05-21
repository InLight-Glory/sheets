function mathForm(n1, n2, Qs, Arith, LvL, ale1, ale2) {
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    if (Arith === "#60#62") {
        Arith = "#9744";
    }

    // Add loading indicator
    const loadingIndicator = '<div class="loading">Loading...</div>';
    document.querySelector(".printable").innerHTML = loadingIndicator;

    var output = "";
    output += '<div class="DontPrintMe"><br/><div class="header-controls">';
    output += '<input class="neew" type="button" onClick="newer();" value="NEW"/> || ';
    output += '<input type="button" onClick="window.print();" value="PRINT"/></div></div>';

    output += "<div class='worksheet-container'>";
    output += "<div class='worksheet-header'>Math Worksheet</div>";

    for (let i = 0; i < Qs; i++) {
        const question = generateQuestion(n1, n2, Arith, LvL);
        output += `<div class='worksheet-question'>${question}</div>`;
    }

    output += "</div>";

    // Remove loading indicator and display output
    setTimeout(() => {
        document.querySelector(".printable").innerHTML = output;
    }, 500);

    function generateQuestion(min, max, operation, level) {
        const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
        const num2 = Math.floor(Math.random() * (max - min + 1)) + min;
        let question = `${num1} ${operation} ${num2}`;

        if (level === "2") {
            question = `(${num1} ${operation} ${num2}) x ${Math.floor(Math.random() * 10)}`;
        }

        return question;
    }
}


function aleRandX() {
    var r1 = 0;
    var r2 = 3;
    return Math.floor(Math.random() * ((r2 - r1) + 1) + r1);
}
