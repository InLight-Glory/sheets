function mathForm(n1, n2, Qs, Arith, LvL, ale1, ale2) {
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    if (Arith === "#60#62") {
        Arith = "#9744";
    }
    

    //working on this to make sure it works
    var output = "";
    var i = 1;
    var b = 0;
    var aleN;
    output += '<div class="DontPrintMe"><br/><div style="text-align:right; width:90%;"><span class="AnsShow" style="display:none;"><input type="checkbox" name="AnsShow" id="AnsShow"/><label for="AnsShow">Answers</label> || </span><input class="neew" type="button" onClick="newer();" value="NEW"/> || ';
    output += '<input type="button" onClick="window.print();" value="PRINT"/></div></div>';
    output += "<div class='pure-g' style='font-size:1.5rem; margin: 0 auto; padding-top:25px; background-color:white; justify-content: center; '><div class='pure-u-1' style='text-align:center'><input class='traceMe' style='border: 1px solid black; border-radius:20; text-align:center; padding: 10px 0px; font-size: 3rem!important;' type='text' maxlength='20' value='name' name='name' /></div>";

    function randArth() {
        var ar1 = 1;
        var ar2 = 4;
        var arrith = Math.floor(Math.random() * ((ar2 - ar1) + 1) + ar1);
        switch (arrith) {
            case 1:
                return "plus";
                break;
            case 2:
                return "minus";
                break;
            case 3:
                return "times";
                break;
            case 4:
                return "divide";
                break;
            default:
                console.log("something wrong with randArth() in Math.js")
                break;

        }
    }

    function aleSelect(num) {
        if (num == 1) {
            if (ale1 == "random1") {
                return randArth();
            } else {
                switch (ale1) {
                    case "add1":
                        return "plus";
                        break;
                    case "subtract1":
                        return "minus";
                        break;
                    case "multiply1":
                        return "times";
                        break;
                    case "divide1":
                        return "divide";
                        break;
                    default:
                        break;
                }
            }
        } else if (num == 2) {
            if (ale2 == "random2") {
                return randArth();
            } else {
                switch (ale2) {
                    case "add2":
                        return "plus";
                        break;
                    case "subtract2":
                        return "minus";
                        break;
                    case "multiply2":
                        return "times";
                        break;
                    case "divide2":
                        return "divide";
                        break;
                    default:
                        break;
                }
            }
        } else {
            console.log("something wrong with fn.aleselect in Math.js");
        }
    }

    function arithAns(Ath, first, second, third) {
        var AnsAnswer;
        switch (Ath) {
            case "#43":
                if (LvL == 2) {
                    AnsAnswer = (first + second + third);
                } else {
                    AnsAnswer = (first + second);
                }
                break;
            case "#215":
                if (LvL == 2) {
                    AnsAnswer = (first * second * third);
                } else {
                    AnsAnswer = (first * second);
                }
                break;
            case "#9744":
                if (first > second) {
                    AnsAnswer = ">";
                } else if (first == second) {
                    AnsAnswer = "=";
                } else {
                    AnsAnswer = "<";
                }
                break;
            case "#8722":
                AnsAnswer = (first - second);
                break;
            case "#247":
                var divAnswer = (first / second);
                var davAnswer = (first % second);
                AnsAnswer = Math.round((divAnswer + Number.EPSILON) * 100) / 100;
                divAnswer = Math.floor(first / second);
                if ((first != 0) && (second != 0) && (davAnswer != 0)){
                    AnsAnswer += "<span style='float: right;'> " + divAnswer + "r"+ davAnswer+"</span>";
                }
                break;
            default :
                console.log("something wrong with arithAns funciton in Math.js");
                break;
        }
        return AnsAnswer;
    }

    function algeAnswer(top, ari1, bot, ari2, tri) {
        var paren;
        switch (ari1) {
            case "plus":
                paren = top + bot;
                break;
            case "minus":
                paren = top - bot;
                break;
            case "times":
                paren = top * bot;
                break;
            case "divide":
                paren = top / bot;
                break;
            default:
                break;
        }
        switch (ari2) {
            case "plus":
                return paren + tri;
                break;
            case "minus":
                return paren - tri;
                break;
            case "times":
                return paren * tri;
                break;
            case "divide":
                return paren / tri;
                break;
            default:
                break;
        }
    }

    if (Arith == "xscr") {
        output += "<div class='pure-g' style='text-align:center; justify-content: center;'>";
        var temp;
        for (i; i <= Qs; i++) {
            var topNum = Math.floor(Math.random() * ((n2 - n1) + 1) + n1);
            var botNum = Math.floor(Math.random() * ((n2 - n1) + 1) + n1);
            var triNum = Math.floor(Math.random() * ((n2 - n1) + 1) + n1);

            if (topNum < botNum) {
                temp = topNum;
                topNum = botNum;
                botNum = temp;
            }
            var ae1, ae2;
            ae1 = aleSelect(1);
            ae2 = aleSelect(2);

            if (LvL == "2") {
                output += "<div class='pure-u-1-3 aleQ' style='margin: 10px; border: 2px solid black; border-radius: 15px;'>" +
                    "(<div class='pure-u-1-8 aleNum'>" +
                    topNum +
                    "</div><div class='pure-u-1-8'>&" +
                    ae1 +
                    ";</div><div class='pure-u-1-8 aleNum'>" +
                    botNum +
                    "</div>)<div class='pure-u-1-8'>&" +
                    ae2 +
                    ";</div><div class='pure-u-1-8 aleNum'>" +
                    triNum +
                    "</div><div class='pure-u-1-8'> = </div><div class='pure-u-1-8 aleNum'>";
                aleN = algeAnswer(topNum, ae1, botNum, ae2, triNum);
                if (aleN == "Infinity") {
                    output += "&infin;";
                } else {
                    output += Math.round((aleN + Number.EPSILON) * 100) / 100;
                }
                output += "</div><br/><br/><br/><br/></div>";
            } else {
                output += "<div class='pure-u-1-3' style='margin: 10px; border: 2px solid black; border-radius: 15px;'>" +
                    "(<div class='pure-u-1-8'>" +
                    topNum +
                    "</div><div class='pure-u-1-8'>&" +
                    ae1 +
                    ";</div><div class='pure-u-1-8'>" +
                    botNum +
                    "</div>)<div class='pure-u-1-8'>&" +
                    ae2 +
                    ";</div><div class='pure-u-1-8'>" +
                    triNum +
                    "</div><div class='pure-u-1-8'> = <div class='AnnS pure-u-1-8 ' style='display:none;' >" +
                    Math.round((algeAnswer(topNum, ae1, botNum, ae2, triNum) + Number.EPSILON) * 100) / 100 +
                    "</div></div><br/><br/><br/></div>";
            }
        }
        output += "</div>";
        return output;
    } else {
        // if ((Qs % 2) === 0){
        for (i; i <= Qs; i++) {
            b++;
            output += '<div class="maths pure-u-1-5" style="border: 2px solid black; border-radius:10%; margin:5px; width:17%">';
            var topNum = Math.floor(Math.random() * ((n2 - n1) + 1) + n1);
            var botNum = Math.floor(Math.random() * ((n2 - n1) + 1) + n1);
            var triNum = Math.floor(Math.random() * ((n2 - n1) + 1) + n1);
            if (topNum > n2) {
                topNum = n2;
            }
            if (botNum > n2) {
                botNum = n2;
            }
            if (Arith == "#8722" || Arith == "#247") {
                if (LvL == 1) {
                    var temp;
                    if (topNum < botNum) {
                        temp = topNum;
                        topNum = botNum;
                        botNum = temp;
                    }
                } else {}
            }

            if (Arith === "#9744") {
                var nuDiv;
                if (LvL == 2) {
                    Arith = '<img src="svgs/Square.svg" class="notsolve" style="width: 40px;"/>';
                    output += "<div class='pure-g' style='margin: 5%; text-align:center;justify-content: center;'><div class='pure-u-1-3'>";
                    nuDiv = qR(1, 9);
                    var nuTop = topNum + "/" + nuDiv;
                    var topNumNow = topNum / nuDiv;
                    output += nuTop +
                        "</div><div class='pure-u-1-3'>" +
                        Arith;
                    nuDiv = qR(1, 9);
                    var nuBot = botNum + "/" + nuDiv;
                    var botNumNow = botNum / nuDiv;
                    Arith = "#9744";
                    output += "<div class='solve' style='display: none; border: 2px solid black;'>" +
                        arithAns(Arith, topNumNow, botNumNow) + "</div>" +
                        "</div><div class='pure-u-1-3'>";

                    output += nuBot;
                    output += "</div><br/><hr/><br/>" +
                        "</div> ";
                } else {
                    Arith = '<img src="svgs/Square.svg" class="notsolve" style="width: 40px;"/>';
                    output += "<div class='pure-g' style='margin: 5%; text-align:center;justify-content: center;'><div class='pure-u-1-3'>" +
                        topNum +
                        "</div><div class='pure-u-1-3'>" +
                        Arith;
                    Arith = "#9744";
                    output += "<div class='solve' style='display: none; border: 2px solid black;'>" +
                        arithAns(Arith, topNum, botNum) + "</div>" +
                        "</div><div class='pure-u-1-3'>" +
                        botNum +
                        "</div><br/><hr/><br/>" +
                        "</div> ";
                }
                Arith = "#9744";
            } else if ((LvL == 2) && ((Arith == "#43") || (Arith == "#215"))) {
                output += "<div style='margin: 5%; '><span style='float: right;'>" + topNum +
                    "</span><br/><span style='float: right;'>" + triNum +
                    "</span><br/><span style='float: left;'>&" +
                    Arith +
                    ";</span><span style='float: right;'>" + botNum +
                    "</span><br/><hr/><br/>" +
                    "<span class='solve' style='display: none;'>" +
                    Math.round((arithAns(Arith, topNum, botNum, triNum) + Number.EPSILON) * 100) / 100 +
                    "</span></div> ";
            } else {
                output +=
                    "<div style='margin: 5%; '><span style='float: right;'>" +
                    topNum +
                    "</span><br/><span style='float: left;'>&" +
                    Arith +
                    ";</span><span style='float: right;'>" +
                    botNum +
                    "</span><br/><hr/><br/>" +
                    "<span class='solve' style='display: none;'>" +
                    arithAns(Arith, topNum, botNum)+
                    "</span></div>";
            }
            output += "</div>";
            if (b == 5) {
                output += "</div>";
                output +=
                    "<div class='pure-g' style='font-size:1.5rem; margin: 0 auto;background-color:white;justify-content: center;'>";

                b = 0;
            }
        }
        // output += "</div>";
    }
    return output;
}


function aleRandX() {
    var r1 = 0;
    var r2 = 3;
    return Math.floor(Math.random() * ((r2 - r1) + 1) + r1);
}
