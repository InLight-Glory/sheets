function traceThis(amount, style, type, code, lvl) {
    var min, max;

    function rand1to3(minn, maxx) {
        var randy = Math.floor((Math.random() * ((maxx - minn) + 1) + minn));
        return randy
    }

    function randyNum() {
        min = 48;
        max = 57;
        var ranny = Math.floor((Math.random() * ((max - min) + 1) + min));
        return ranny;
    }


    function randyCap() {
        min = 65;
        max = 90;
        var ranny = Math.floor((Math.random() * ((max - min) + 1) + min));
        return ranny;
    }

    function randyLow() {
        min = 97;
        max = 122;
        var ranny = Math.floor((Math.random() * ((max - min) + 1) + min));
        return ranny;
    }

    function randShape() {
        min = 0;
        max = 12;
        var ranny = Math.floor((Math.random() * ((max - min) + 1) + min));
        return ranny;
    }

    function Shape(num) {
        var SHoutput = "";
        switch (num) {
            case 0:
                SHoutput = "svgs/Star.svg";
                break;
            case 1:
                SHoutput = "svgs/Circle.svg";
                break;
            case 2:
                SHoutput = "svgs/Triangle.svg";
                break;
            case 3:
                SHoutput = "svgs/Square.svg";
                break;
            case 4:
                SHoutput = "svgs/Oval.svg";
                break;
            case 5:
                SHoutput = "svgs/Rectangle.svg";
                break;
            case 6:
                SHoutput = "svgs/Heart.svg";
                break;
            case 7:
                SHoutput = "svgs/Pentagon.svg";
                break;
            case 8:
                SHoutput = "svgs/Hexagon.svg";
                break;
            case 9:
                SHoutput = "svgs/Septagon.svg";
                break;
            case 10:
                SHoutput = "svgs/Arrow2.svg";
                break;
            case 11:
                SHoutput = "svgs/Cloud.svg";
                break;
            case 12:
                SHoutput = "svgs/Donut.svg";
                break;
            case 13:
                SHoutput = "svgs/Diamond.svg";
                break;
            case 14:
                SHoutput = "svgs/Arrow1.svg";
                break;
            default:
                alert("something wrong");
                break;

        }
        return SHoutput;
    }
    var wOutput = "";
    var tmpName = "";
    if (type == "na") {
        tmpName = code;
        writeOn = "na";
    } else {
        tmpName = "name";
        writeOn = "";
    }
    wOutput += `<div class="DontPrintMe">
    <div style="text-align:right; width:90%;"><INPUT TYPE="button" onClick="newer();" VALUE="NEW"/> || 
    <INPUT TYPE="button" onClick="window.print();" VALUE="PRINT"/></div>`;
    wOutput += `<div class="pure-u-1" style="text-align: center;">
    <form id="wa1">
    <input type="radio" id="newLines" name="newStyle" />
    <label for="newLines">lines</label> |
    <input type="radio" id="newDots" name="newStyle" />
    <label for="newDots">dots</label>
    </form><br/>
    <form id="wa2">
    <input type="radio" id="Sm" name="newSize" />
    <label for="Sm">small</label> | 
    <input type="radio" id="Md" name="newSize" />
    <label for="Md">medium</label> | 
    <input type="radio" id="Lr" name="newSize" />
    <label for="Lr">large</label> |
    <input type="radio" id="XL" name="newSize" />
    <label for="XL">x-large</label>
    </form>
    </div></div>`;
    wOutput += "<div class='pure-g readUs' id='traceThis' style='font-size:1.5rem; margin: 0 auto; padding-top:25px; background-color:white; justify-content: center;'><div class='pure-u-1' style='text-align:center'><input class='traceMe' style='border: 1px solid black; border-radius:20; text-align:center; padding: 10px 0px; font-size: 3rem!important;' type='text' maxlength='20' value='" + tmpName + "' id='kidsName' name='name' /></div>";
    var linespace = 1;
    switch (type) {
        case "sh":
            if (code == "a") {
                for (i = 1; i <= amount; i++) {
                    wOutput += '<div class="shape Md pure-u-1-4 reads" style="border: 2px solid black; border-radius: 10%; margin: 10px; text-align: center;"> <img src="' + Shape(randShape()) + '"></img>';
                    if (lvl == 1) {
                    if (linespace == 3) {
                        wOutput += '</div><br>';
                        wOutput += `<div class="pure-u-1">
<div style="width: 90%; border: 2px solid black; margin: 5px auto; padding: 6% 0px; page-break-inside: avoid;">
<div style="height: .01px; border: 1.5px dashed #C8C8C8; width: 99%; margin: 0 auto;">
</div></div></div><br/><br/>`;
                        linespace = 1;
                    } else {
                        wOutput += "</div>";
                        if (i == amount) {
                            wOutput += `<div class="pure-u-1">
<div style="width: 90%; border: 2px solid black; margin: 5px auto; padding: 6% 0px; page-break-inside: avoid;">
<div style="height: .01px; border: 1.5px dashed #C8C8C8; width: 99%; margin: 0 auto;">
</div></div></div><br/><br/>`;
                        }
                        linespace++;
                    }
                } else{wOutput += '</div><br/>';}
                }
                wOutput += "</div>";
                return wOutput;
            } else {
                var shp, i;
                i = 1;
                while (i <= amount) {
                    shp = randShape();
                    if (code.charAt(shp) == "0") {} else if (code.charAt(shp) == "1") {
                        wOutput += '<div class="shape Md pure-u-1-4 reads" style="border: 2px solid black; border-radius: 10%; margin: 10px; text-align: center;"> <img src="' + Shape(shp) + '"></img>';
                        if (lvl == 1) {
                    if (linespace == 3) {
                        wOutput += '</div><br>';
                        wOutput += `<div class="pure-u-1">
<div style="width: 90%; border: 2px solid black; margin: 5px auto; padding: 8% 0px; page-break-inside: avoid;">
<div style="height: .01px; border: 1.5px dashed #C8C8C8; width: 99%; margin: 0 auto;">
</div></div></div><br/><br/>`;
                        linespace = 1;
                    } else {
                        wOutput += "</div>";
                        if (i == amount) {
                            wOutput += `<div class="pure-u-1">
<div style="width: 90%; border: 2px solid black; margin: 5px auto; padding: 8% 0px; page-break-inside: avoid;">
<div style="height: .01px; border: 1.5px dashed #C8C8C8; width: 99%; margin: 0 auto;">
</div></div></div><br/><br/>`;
                        }
                        linespace++;
                    }
                } else{wOutput += '</div><br/>';}
                        i++;
                    } else {}
                }
                wOutput += "</div>";
                return wOutput;
            }
            break;
        case "na":
            for (i = 1; i <= amount; i++) {
                wOutput += '<div class="pure-u-1 reads" style="border: 2px solid black; border-radius: 25%; margin: 10px; text-align: center;">';
                wOutput += `<div class="${style}Me" >
                ${code}
                </div>`;
                if (lvl == 1) {
                    if (linespace == 1) {
                        wOutput += '</div><br>';
                        wOutput += `<div class="pure-u-1">
<div style="width: 90%; border: 2px solid black; margin: 5px auto; padding: 5% 0px; page-break-inside: avoid;">
<div style="height: .01px; border: 1.5px dashed #C8C8C8; width: 99%; margin: 0 auto;">
</div></div></div><br/><br/>`;
                        linespace = 1;
                    } else {
                        wOutput += "</div>";
                        if (i == amount) {
                            wOutput += `<div class="pure-u-1">
<div style="width: 90%; border: 2px solid black; margin: 5px auto; padding: 5% 0px; page-break-inside: avoid;">
<div style="height: .01px; border: 1.5px dashed #C8C8C8; width: 99%; margin: 0 auto;">
</div></div></div><br/><br/>`;
                        }
                        linespace++;
                    }
                } else{wOutput += '</div><br/>';}
            }
            wOutput += "</div>";
            return wOutput;
            break;
        case "a":
            if (code == "0") {
                for (n = 48; n <= 57; n++) {
                    wOutput += '<div class="pure-u-1-3 Md reads" style="border: 2px solid black; border-radius: 10%; margin: 10px; width: 20%; text-align: center;">';
                    wOutput += `<div class="${style}Me" >
                ${String.fromCharCode(n)}
                </div>`;
                    if (lvl == 1) {
                        if (linespace == 4) {
                            wOutput += '</div><br>';
                            wOutput += `<div class="pure-u-1">
<div style="width: 90%; border: 2px solid black; margin: 5px auto; padding: 8% 0px; page-break-inside: avoid;">
<div style="height: .01px; border: 1.5px dashed #C8C8C8; width: 99%; margin: 0 auto;">
</div></div></div><br/><br/>`;
                            linespace = 1;
                        } else {
                            wOutput += "</div>";
                            if (i == amount) {
                                wOutput += `<div class="pure-u-1">
<div style="width: 90%; border: 2px solid black; margin: 5px auto; padding: 8% 0px; page-break-inside: avoid;">
<div style="height: .01px; border: 1.5px dashed #C8C8C8; width: 99%; margin: 0 auto;">
</div></div></div><br/><br/>`;
                            }
                            linespace++;
                        }
                    } else {
                        wOutput += '</div>';
                    }
                }
            }
            if (code == "A") {
                for (A = 65; A <= 90; A++) {
                    wOutput += '<div class="pure-u-1-3 reads" style="border: 2px solid black; border-radius: 10%; margin: 10px; width: 20%; text-align: center;">';
                    wOutput += `<div class="${style}Me" >
                ${String.fromCharCode(A)}
                </div>`;
                    if (lvl == 1) {
                        if (linespace == 4) {
                            wOutput += '</div><br>';
                            wOutput += `<div class="pure-u-1">
<div style="width: 90%; border: 2px solid black; margin: 5px auto; padding: 8% 0px; page-break-inside: avoid;">
<div style="height: .01px; border: 1.5px dashed #C8C8C8; width: 99%; margin: 0 auto;">
</div></div></div><br/><br/>`;
                            linespace = 1;
                        } else {
                            wOutput += "</div>";
                            if (i == amount) {
                                wOutput += `<div class="pure-u-1">
<div style="width: 90%; border: 2px solid black; margin: 5px auto; padding: 8% 0px; page-break-inside: avoid;">
<div style="height: .01px; border: 1.5px dashed #C8C8C8; width: 99%; margin: 0 auto;">
</div></div></div><br/><br/>`;
                            }
                            linespace++;
                        }
                    } else {
                        wOutput += '</div>';
                    }
                }
            }
            if (code == "z") {
                for (z = 97; z <= 122; z++) {
                    wOutput += '<div class="pure-u-1-3 reads" style="border: 2px solid black; border-radius: 10%; margin: 10px; width: 20%; text-align: center;">';
                    wOutput += `<div class="${style}Me" >
                ${String.fromCharCode(z)}
                </div>`;
                    if (lvl == 1) {
                        if (linespace == 4) {
                            wOutput += '</div><br>';
                            wOutput += `<div class="pure-u-1">
<div style="width: 90%; border: 2px solid black; margin: 5px auto; padding: 8% 0px; page-break-inside: avoid;">
<div style="height: .01px; border: 1.5px dashed #C8C8C8; width: 99%; margin: 0 auto;">
</div></div></div><br/><br/>`;
                            linespace = 1;
                        } else {
                            wOutput += "</div>";
                            if (i == amount) {
                                wOutput += `<div class="pure-u-1">
<div style="width: 90%; border: 2px solid black; margin: 5px auto; padding: 8% 0px; page-break-inside: avoid;">
<div style="height: .01px; border: 1.5px dashed #C8C8C8; width: 99%; margin: 0 auto;">
</div></div></div><br/><br/>`;
                            }
                            linespace++;
                        }
                    } else {
                        wOutput += '</div>';
                    }
                }
            }
            wOutput += "</div>";
            return wOutput;
            break;
        case "s":
            for (i = 0; i <= amount; i++) {
                wOutput += '<div class="pure-u-1-3 reads" style="border: 2px solid black; border-radius: 10%; margin: 10px; width: 20%; text-align: center;">';
                wOutput += `<div class="${style}Me" >
                ${code}
                </div>`;
                if (lvl == 1) {
                    if (linespace == 4) {
                        wOutput += '</div><br>';
                        wOutput += `<div class="pure-u-1">
<div style="width: 90%; border: 2px solid black; margin: 5px auto; padding: 8% 0px; page-break-inside: avoid;">
<div style="height: .01px; border: 1.5px dashed #C8C8C8; width: 99%; margin: 0 auto;">
</div></div></div><br/><br/>`;
                        linespace = 1;
                    } else {
                        wOutput += "</div>";
                        if (i == amount) {
                            wOutput += `<div class="pure-u-1">
<div style="width: 90%; border: 2px solid black; margin: 5px auto; padding: 8% 0px; page-break-inside: avoid;">
<div style="height: .01px; border: 1.5px dashed #C8C8C8; width: 99%; margin: 0 auto;">
</div></div></div><br/><br/>`;
                        }
                        linespace++;
                    }
                } else {
                    wOutput += '</div>';
                }
            }
            //            wOutput += "</div>";
            return wOutput;
            break;
        case "r":
            var shar = "";
            for (i = 1; i <= amount; i++) {
                wOutput += '<div class="pure-u-1-3 reads" style="border: 2px solid black; border-radius: 10%; margin: 10px; width: 20%; text-align: center;">';
                if (code.length == 3) {
                    switch (code) {
                        case '100':
                            shar = randyCap();
                            wOutput += `<div class="${style}Me" >
                        ${String.fromCharCode(shar)}
                        </div>`;
                            break;
                        case '010':
                            shar = randyNum();
                            wOutput += `<div class="${style}Me" >
                        ${String.fromCharCode(shar)}
                        </div>`;
                            break;
                        case '001':
                            shar = randyNum();
                            wOutput += `<div class="${style}Me" >
                        ${String.fromCharCode(shar)}
                        </div>`;
                            break;
                        case '110':
                            var RanPick = rand1to3(1, 2);
                            if (RanPick == 1) {
                                shar = randyCap();
                                wOutput += `<div class="${style}Me" >
                            ${String.fromCharCode(shar)}
                            </div>`;
                            } else if (RanPick == 2) {
                                shar = randyLow();
                                wOutput += `<div class="${style}Me" >
                            ${String.fromCharCode(shar)}
                            </div>`;
                            } else {}
                            break;
                        case '101':
                            var RanPick = CN();
                            if (RanPick == 1) {
                                shar = randyCap();
                                wOutput += `<div class="${style}Me" >
                            ${String.fromCharCode(shar)}
                            </div>`;
                            } else if (RanPick == 3) {
                                shar = randyNum();
                                wOutput += `<div class="${style}Me" >
                            ${String.fromCharCode(shar)}
                            </div>`;
                            } else {
                                console.log(RanPick);
                            }
                            break;
                        case '011':
                            var RanPick = rand1to3(2, 3);
                            if (RanPick == 2) {
                                shar = randyLow();
                                wOutput += `<div class="${style}Me" >
                            ${String.fromCharCode(shar)}
                            </div>`;
                            } else if (RanPick == 3) {
                                shar = randyNum();
                                wOutput += `<div class="${style}Me" >
                            ${String.fromCharCode(shar)}
                            </div>`;
                            } else {}
                            break;
                        case '111':
                            var RanPick = rand1to3(1, 3);
                            if (RanPick == 1) {
                                shar = randyCap();
                                wOutput += `<div class="${style}Me" >
                            ${String.fromCharCode(shar)}
                            </div>`;
                            } else if (RanPick == 2) {
                                shar = randyLow()
                                wOutput += `<div class="${style}Me" >
                            ${String.fromCharCode(shar)}
                            </div>`;
                            } else if (RanPick == 3) {
                                shar = randyNum();
                                wOutput += `<div class="${style}Me" >
                            ${String.fromCharCode(shar)}
                            </div>`;
                            } else {}
                            break;
                        default:
                            console.log("error in Tracing.js Random");
                            break;
                    }
                }
                if (lvl == 1) {
                    if (linespace == 4) {
                        wOutput += '</div><br>';
                        wOutput += `<div class="pure-u-1">
<div style="width: 90%; border: 2px solid black; margin: 5px auto; padding: 8% 0px; page-break-inside: avoid;">
<div style="height: .01px; border: 1.5px dashed #C8C8C8; width: 99%; margin: 0 auto;">
</div></div></div><br/><br/>`;
                        linespace = 1;
                    } else {
                        wOutput += "</div>";
                        if (i == amount) {
                            wOutput += `<div class="pure-u-1">
<div style="width: 90%; border: 2px solid black; margin: 5px auto; padding: 8% 0px; page-break-inside: avoid;">
<div style="height: .01px; border: 1.5px dashed #C8C8C8; width: 99%; margin: 0 auto;">
</div></div></div><br/><br/>`;
                        }
                        linespace++;
                    }
                } else {
                    wOutput += "</div>";
                }

            }
            return wOutput;
            break;
        default:
            console.log("something went wrong in Tracing.js fn:traceThis");
            wOutput += "</div>";
            return wOutput;
            break;
    }
    var out = "";

    function CN() {
        out = rand1to3(1, 2);
        if (out == 2) {
            out = 3
        }
        return out;
    }
}

function chkRadio(style, size) {
    if (style == "trace") {
        radiobtn = document.getElementById("newLines");
        radiobtn.checked = true;
        $("#kidsName").removeClass("dotsMe");
        $("#kidsName").addClass("traceMe");
    }
    if (style == "dots") {
        radiobtn = document.getElementById("newDots");
        radiobtn.checked = true;
        $("#kidsName").removeClass("traceMe");
        $("#kidsName").addClass("dotsMe");
    }
    if (size == "Sm") {
        radiobtn = document.getElementById("Sm");
        radiobtn.checked = true;
    }
    if (size == "Md") {
        radiobtn = document.getElementById("Md");
        radiobtn.checked = true;
    }
    if (size == "Lr") {
        radiobtn = document.getElementById("Lr");
        radiobtn.checked = true;
    }
    if (size == "XL") {
        radiobtn = document.getElementById("XL");
        radiobtn.checked = true;
    }
}
