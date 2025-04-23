$(document).ready(function () {
    // top buttons ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $("button.SubjectsSelect").on("click", function () {
        $(".SubjectsSelect").removeClass("button-success ");
        $(this).addClass("button-success");

        $choose = $(".SubjectsSelect.button-success").text();
        if ($choose == "Math") {
            $(".formz").hide();
            $(".math").show();
        } else if ($choose == "Vocabulary") {
            $(".formz").hide();
            $(".Vocabulary").show();
        } else if ($choose == "Reading") {
            $(".formz").hide();
            $(".Reading").show();
        } else if ($choose == "Writing") {
            $(".formz").hide();
            $(".Writing").show();
        } else if ($choose == "Tracing") {
            $(".formz").hide();
            $(".tracing").show();
        } else {

        }
//        $(document).remove(".footer");
//        $(".Main").after(footer());
    });

});

function shoSheet(evt, sheetName) {
    $("#DropDownMenu option[value='" + sheetName + "']").prop("selected", "selected");
    shoSheett();
    $(".tablinks").removeClass(" active");
    evt.currentTarget.className += " active";
}

function shoSheett() {
    var sheetName = $('#DropDownMenu option:selected').attr("value");
    $(".formz").hide();
    $(".howz").hide();
    $(".tablinks").removeClass(" active");
    var tabl = $(".tablinks").length;
    for (i = 0; i <= tabl; i++) {
        if ($(".tablinks:nth-of-type(" + i + ")").text() == sheetName) {
            $(".tablinks:nth-of-type(" + i + ")").addClass(" active");
        } else {}
    }

    //    $("#DropDownMenu option").removeAttr("selected");
    $("." + sheetName).show();
}

/*
//function blanky(){
//    console.log("Blanky funciton executed.");
//    $("#mName").submit();
//}
//function doneBlank(){
//    console.log("doneBlank executed");
//}
//https://www.w3schools.com/jsref/event_onsubmit.asp
//https://www.w3schools.com/jsref/event_onfocusout.asp
//https://www.google.com/search?q=javascript+prevent+form+submit+on+refresh&oq=javascript+prevent+form+refresh+on&aqs=chrome.1.69i57j0l2.31187j1j7&sourceid=chrome&ie=UTF-8   
//   */

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
    //capitalize('flavio') //'Flavio'
    //capitalize('f')      //'F'
    //capitalize(0)        //''
    //capitalize({})       //''
}


// Get a random number i want from anywhere on the site.
function qR(min, max) {
    var aNum = Math.floor(Math.random() * ((max - min) + 1) + min);
    return aNum;
}


function selectShapes() {
    var output=""; var caped;
    var sdb = JSON.parse(traces);
    var Amou = sdb["shapesof"].length;
    for (var i=0; i < Amou; i++){
        caped = capitalize(sdb["shapesof"][i]);
    output += `<div class="pure-u-1-8">
        <label for="${sdb["shapesof"][i]}"><img src="svgs/${caped}.svg" class="Tiny" alt=""></label><br>
        <input class="TracingShapesSub" type="checkbox" id="${sdb["shapesof"][i]}" name="${sdb["shapesof"][i]}"/></div> `;
    }
    return output;
}
