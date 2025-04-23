function ReadingForm(rType, rRequest, rAmount) {
    var i = 0;
    var rOutput = "";
    var pureSize = "pure-u-11-24 reads";
    rOutput += '<div style="text-align:right; width:90%;"><INPUT TYPE="button" onClick="newer();" VALUE="NEW"/> || ';
    rOutput += '<INPUT TYPE="button" onClick="window.print();" VALUE="PRINT"/></div>';
    rOutput += "<div class='pure-g readUs' style='font-size:1.5rem; margin: 0 auto; padding-top:25px; background-color:white;justify-content: center;'><div class='pure-u-1' style='text-align:center;'><input class='traceMe' style='border: 1px solid black; border-radius:20; text-align:center; padding: 10px 0px; font-size: 3rem!important;' type='text' maxlength='20' value='name' name='name'/></div><br/>";

    //    generate questions to ask
    //    generate questions to ask
    switch (rRequest) {
        case 0:
            while (i < rAmount) {

                i++;
            }
            break;
        case 1:
            while (i < rAmount) {
                rOutput += '<div class="noBreak ' + pureSize + '" style="border: 2px solid black; border-radius: 10%; margin: 10px; text-align: center;">';
                rOutput += SenTypes("Circle", rType);
                rOutput += "</div>";
                i++;
            }
            break;
        case 2:
            while (i < rAmount) {
                rOutput += '<div class="noBreak ' + pureSize + '" style="border: 2px solid black; border-radius: 10%; margin: 10px; text-align: center;">';
                rOutput += SenTypes("Color", rType);
                rOutput += "</div>";
                i++;
            }
            break;
        case 3:
            while (i < rAmount) {
                var pic = qR(1, 2);
                if (pic == 1) {
                    rOutput += '<div class="noBreak ' + pureSize + '" style="border: 2px solid black; border-radius: 10%; margin: 10px; text-align: center;">';
                    rOutput += SenTypes("Circle", rType);
                    rOutput += "</div>";
                }
                if (pic == 2) {
                    rOutput += '<div class="noBreak ' + pureSize + '" style="border: 2px solid black; border-radius: 10%; margin: 10px; text-align: center;">';
                    rOutput += SenTypes("Color", rType);
                    rOutput += "</div>";
                }
                i++;
            }
            break;
        default:
            break;
    }

    function DisplayShow(ip) {
        var dText = "";
        if (Object.is(Number(ip), NaN)) {
            
            var daImg = "svgs/" + capitalize(ip) + ".svg";
            dText = "";
            dText += "<div style='vertical-align: middle; margin-top: 20px'>";
            dText += "<img class='pure-u-1-3' src='" + daImg + "' style='width:40px; vertical-align: middle;' />";
            dText += "<img class='pure-u-1-3' src='" + daImg + "' style='width:80px; vertical-align: middle; margin: 20px' />";
            dText += "<img class='pure-u-1-3' src='" + daImg + "' style='width:120px; vertical-align: middle;' />";
            dText += "</div><br/>";
            return dText;
        } else {
            var a, b;
            var ia = 1;
            var ib = 1;
            while (ia != 0) {
                a = qR(0, 9);
                if (a != ip) {
                    ia = 0;
                }
            }
            while (ib != 0) {
                b = qR(0, 9);
                if ((b != ip) && (b != a)) {
                    ib = 0;
                }
            }
            dText = "";
            var x, x1, y, y1, z, z1;
            var w = 1;
            var v = 1;
            x1 = qR(1, 3);
            switch (x1) {
                case 1:
                    x = "<div class='pure-u-1-3 outlineMe'>" + a + "</div>";
                    break;
                case 2:
                    x = "<div class='pure-u-1-3 outlineMe'>" + ip + "</div>";
                    break;
                case 3:
                    x = "<div class='pure-u-1-3 outlineMe'>" + b + "</div>";
            }
            while (w != 0) {
                y1 = qR(1, 3);
                if (y1 != x1) {
                    switch (y1) {
                        case 1:
                            y = "<div class='pure-u-1-3 outlineMe'>" + a + "</div>";
                            break;
                        case 2:
                            y = "<div class='pure-u-1-3 outlineMe'>" + ip + "</div>";
                            break;
                        case 3:
                            y = "<div class='pure-u-1-3 outlineMe'>" + b + "</div>";
                    }
                    w = 0;
                }
            }
            while (v != 0) {
                z1 = qR(1, 3);
                if ((z1 != x1) && (z1 != y1)) {
                    switch (z1) {
                        case 1:
                            z = "<div class='pure-u-1-3 outlineMe'>" + a + "</div>";
                            break;
                        case 2:
                            z = "<div class='pure-u-1-3 outlineMe'>" + ip + "</div>";
                            break;
                        case 3:
                            z = "<div class='pure-u-1-3 outlineMe'>" + b + "</div>";
                    }
                    v = 0;
                }
            }
            dText += "<div style='vertical-align: middle; margin-top: 20px'>";
            dText += x + y + z;
            dText += "</div><br/>";
            return dText;
        }
    }

    // sentense types to be randomly selected from
    // sentense types to be randomly selected from
    function SenTypes(objj, picz) {
        var senOut = "";
        var senType = qR(1, 2);
        switch (senType) {
            case 1:
                var curObj = OptTypes(picz);
                if ((Number(curObj))||(curObj==0)) {
                    senOut = DisplayShow(curObj) + objj + " the " + NumToWord(curObj) + " with the color " + randColor() + ".";
                } else {
                    senOut = DisplayShow(curObj) + objj + " the " + randSize() + " " + curObj + " with the color " + randColor() + ".";
                }
                break;
            case 2:
                var curObj = OptTypes(picz);
                if ((Number(curObj))||(curObj==0)) {
                    senOut = DisplayShow(curObj) + objj + " the number " + NumToWord(curObj) + ".";
                } else {
                    senOut = DisplayShow(curObj) + objj + " the " + randSize() + " " + curObj + ".";
                }
                break;
            default:
                senOut += "Error occur";
                break;
        }
        return senOut;
    }

    //                object types to select from
    //                object types to select from
    function OptTypes(num) {
        switch (num) {
            case 0:
                return "______";
                break;
            case 1:
                return randShape();
                break;
            case 2:
                return qR(0, 9);
                break;
            case 3:
                var tem = qR(1, 2);
                if (tem == 1) {
                    return randShape();

                }
                if (tem == 2) {
                    return qR(0, 9);
                }
                break;
            default:
                break;
        }
    }

    rOutput += "</div>";
    return rOutput;
}


// random generators of shapes colors and number to word converters.
// random generators of shapes colors and number to word converters.
function randShape() {
    var dbs = JSON.parse(traces);
    var shape = dbs["shapesof"][qR(1, 5)];
    return shape;
}

function randColor() {
    var dbs = JSON.parse(re);
    var cLength = dbs["ads"][0]["colorsof"].length;
    cLength--;
    var colord = dbs["ads"][0]["colorsof"][qR(0, cLength)];
    return colord;
}

function randSize() {
    var dbs = JSON.parse(re);
    var cLength = dbs["ads"][1]["sizesof"].length;
    cLength--;
    var size = dbs["ads"][1]["sizesof"][qR(0, cLength)];
    return size;
}

function NumToWord(num) {
    var nums = "";
    var dbs = JSON.parse(re);
    if (num.toString().length == 1) {
        nums = dbs["ads"][2]["numbersof"][num];
    }
    if (num.toString().length == 2) {
        if (num <= 20) {
            nums = dbs["ads"][2]["numbersof"][num];
        } else if (num > 20 && num < 30) {
            var digit = num.toString().charAt(1);
            nums = dbs["ads"][2]["numbersof"][20];
            nums += " " + dbs["ads"][2]["numbersof"][digit];
            //            nums += " "+ dbs["numbersof"][Number(digit)];
        }
    }
    if (num.toString().length == 3) {

    }
    if (num.toString().length == 4) {

    }
    return nums;
}
//*Color the *small *square *blue.
//*Circle the *big *square.
//*Circle the number *five.
//Which *square is *big-er?
