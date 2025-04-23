function WritingForm(count) {
    var wOutput = "";
    var imagez, imgzCount;
    $.ajax({
        url: "index.php",
        type: "POST",
        dataType: "html",
        data: {
            TypeGet: "image"
        },
        success: function (dataFiles) {
            var Vt = dataFiles.split("**");
            imagez = Vt[0].split(",");
            imgzCount = imagez.length - 1;
            wOutput += '<div class="DontPrintMe"><div style="text-align:right; width:90%;"><INPUT TYPE="button" onClick="newer();" VALUE="NEW"/> || ';
            wOutput += '<INPUT TYPE="button" onClick="window.print();" VALUE="PRINT"/></div></div>';
            wOutput += "<div class='pure-g readUs' style='font-size:1.5rem; margin: 0 auto; padding: 25px 10px 5px 10px; background-color:white;justify-content: center;'><div class='pure-u-1' style='text-align:center;'><input class='traceMe' style='border: 1px solid black; border-radius:20; text-align:center; padding: 10px 0px; font-size: 3rem!important;' type='text' maxlength='20' value='name' name='name'/></div><br/><br/>";

            for (var i = 1; i <= count; i++) {
                var nowImg = qR(0, (imgzCount-1));
                wOutput += `<div class="pure-u-1-2" style=" text-align: center;">
                <div style="border: 1px solid black; border-radius: 10px; margin: 10px;">
                <img style="height: 100px; margin: 15px;" src="imgs/${imagez[nowImg]}" />
                <hr class="daHr">
                <hr class="daHr">
                <hr class="daHr">
                </div>
                </div>`;
            }

            wOutput += '</div>';
            conclude();
        },
        error: function () {
            console.log("Error sending info to servicess.php");
        }
    });

    function conclude() {
        
        $(".printable").html(wOutput);
        $(".Main").hide();
        $(".printable").show();
    }
}
