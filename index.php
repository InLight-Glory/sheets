<?php 
function timeMod($fil) {
    return filemtime($fil);
}

$target_dir = "imgs/";
if ((isset($_POST['TypeGet']))&&($_POST['TypeGet']=="image")){
    $Files = scandir($target_dir);
//    echo count($Files)."**";

    foreach ($Files as $key => $file){
        if ((strlen($file)>4) && ((substr($file, -4)=='.jpg') || (substr($file, -4)=='.png') || (substr($file, -5)=='.jpeg'))){
            /*if (substr($file, -5)=='.jpeg'){
                $jPEGs = explode(".",$file);
                    if ($jPEGs[1]=="V"){
                        
                    }else{*/
            echo $file.",";
//            echo '<img class="card approve" style="height: 100px; width: auto !important;" src="assets/'.$target_dir.$file.'" onclick="tempFile=\''.$file.'\'">';
        }
    }
    echo "**";
    $_POST['TypeGet']=="";
}
?>
<!DOCTYPE html>
<html lang="en">

<head profile="http://inlightglory.com/sheets">
    <meta property="og:title" content="Worksheets" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="Quickly create simple or challenging worksheets for your kids and/or students.
" />
    <meta property="og:url" content="https://inlightglory.com/sheets" />
    <meta property="og:image:url" content="https://inlightglory.com/sheets/ogSheetsHeader.png" />
    <meta property="og:image" content="https://inlightglory.com/sheets/ogSheetsHeader.png" />
    <meta property="og:image:type" content="image/png" />
    <meta property="fb:app_id" content="179151353174159" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-100472889-2"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-100472889-2');

    </script>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link rel="icon" type="image/png" href="SheetsIcon.png<?php echo '?m='.timeMod("SheetsIcon.png"); ?>" />

    <!--   -->
    <title>Sheets Home</title>

    <script type="text/javascript" src="jquery-3.5.1.min.js<?php echo '?m='.timeMod("jquery-3.5.1.min.js"); ?>"></script>
    <!-- jQuery CDN -->
    <!--    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>-->
    <!-- jQuery CDN   https://api.jquery.com/category/attributes/
or just use vanilla JavaScript... https://tobiasahlin.com/blog/move-from-jquery-to-vanilla-javascript/    -->


    <link rel="stylesheet" type="text/css" href="pure-min.css<?php echo '?m='.timeMod("pure-min.css"); ?>" />
    <!-- Pure UI CDN OPTIONAL  -->
    <!--    <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.1/build/pure-min.css" />-->
    <!--[if lte IE 8]>
      <link
        rel="stylesheet" 
        href="https://unpkg.com/purecss@1.0.1/build/grids-responsive-old-ie-min.css"
      />
    <![endif]-->
    <!--[if gt IE 8]><!-->
    <!--    <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.1/build/grids-responsive-min.css" />-->
    <!--<![endif]-->
    <!-- Pure UI OPTIONAL   https://purecss.io/start/   -->

    <script type="text/javascript" src="db.js<?php echo '?m='.timeMod("db.js"); ?>"></script>

    <script src="registry.js<?php echo '?m='.timeMod("registry.js"); ?>"></script>
    <script src="Math.js<?php echo '?m='.timeMod("Math.js"); ?>"></script>
    <script src="Vocabulary.js<?php echo '?m='.timeMod("Vocabulary.js"); ?>"></script>
    <script src="Tracing.js<?php echo '?m='.timeMod("Tracing.js"); ?>"></script>
    <script src="Reading.js<?php echo '?m='.timeMod("Reading.js"); ?>"></script>
    <script src="Writing.js<?php echo '?m='.timeMod("Writing.js"); ?>"></script>
    <script>
        var cWord = 0;
        var writeOn = "";

        function LoadLetterSection() {
            var rOut = "";
            var dbr = JSON.parse(main);
            var rObject = dbr["wordsof"].length - 2;
            var brek = 0;
            for (i = 0; i <= rObject; i++) {
                brek++;
                if (i == 2) {
                    rOut += `| <input type="radio" id="L${i}" name="Letters" value="${i}" checked />
            <label for="L${i}">${dbr["wordsof"][i]["amount"]}</label> `;
                } else {
                    rOut += `| <input type="radio" id="L${i}" name="Letters" value="${i}" />
            <label for="L${i}">${dbr["wordsof"][i]["amount"]}</label> `;
                }
                if (brek == 3) {
                    brek = 0;
                    rOut += "<br/>";
                }
            }
            $(".vocabSelect1").html(rOut);
            
            var qOut = "";
            qOut += 'starts with: <input id="vocabST" class="pure-input-1-5" type="text" value="" maxlength="14"/><br/>';
            qOut += 'contains: <input id="vocabCON" class="pure-input-1-5" type="text" value="" maxlength="15"/><br/>';
            qOut += 'ends with: <input id="vocabND" class="pure-input-1-5" type="text" value="" maxlength="14"/><br/>';
            qOut += 'How many letters? <input id="vocabNUM" class="pure-input-1-5" type="text" value="3" maxlength="5" onchange="var snc=$(this).val().split(\'-\'); if (snc.length>2){$(this).val(\'\')}"/><br/>';
             
            $(".vocabSelect2").html(qOut);
            
        }
        var tracingStyle = "";
        var tracingSize = "";

        /*        function printDiv(divName) {
                    var named = document.getElementById("kidsName").value;
                    var printContents = document.getElementById(divName).innerHTML;
                    var originalContents = document.body.innerHTML;
                    document.body.innerHTML = printContents;
                    document.getElementById("kidsName").value = named;
                    window.print();
                    document.body.innerHTML = originalContents;
                    document.getElementById("kidsName").value = named;
                    chkRadio(tracingStyle, tracingSize);
                }*/

        window.fbAsyncInit = function() {
            FB.init({
                appId: '179151353174159',
                cookie: true,
                xfbml: true,
                version: 'v6.0'
            });

            FB.AppEvents.logPageView();

        };

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

    </script>




    <!--    css-->
    <!--    css-->
    <!--    css-->
    <!--    <link rel="stylesheet" type="text/css" href="style.css<?php echo '?m='.timeMod("style.css"); ?>" />-->
    <link rel="stylesheet" type="text/css" href="style2.css<?php echo '?m='.timeMod("style2.css"); ?>" />

    <style type="text/css" media="print">
        .DontPrintMe {
            display: none;
        }

    </style>
</head>

<body>
       <div class="livesheet" style="display: none; text-align: center; background-color: white; width: 100%; height:100%; position: absolute; z-index: 100;">Live<div id="post"></div></div>
    <div class="pure-g DontPrintMe">
        <div class="pure-u-1" style="text-align: center">
            <a href="http://inlightglory.com/sheets" target="_blank">
                <img src="SheetsHeader.svg<?php //echo '?m='.timeMod("SheetsHeader.svg"); ?>" style="width: 80vw" alt="">
            </a>
        </div>
    </div>
    <div class="printable" id="thePrints"></div>
    <div class="Main">
        <div id="MenusArea">
            <div id="MenuBtn" class="pure-g">
                <div class="pure-u-1-3">
                    <p><button class="SubjectsSelect pure-button ">Math</button></p>
                </div>
                <div class="pure-u-1-3">
                    <p><button class="SubjectsSelect pure-button ">Tracing</button></p>
                </div>
                <div class="pure-u-1-3">
                    <p><button class="SubjectsSelect pure-button ">Reading</button></p>
                </div>
                <div class="pure-u-1-3">
                    <p><button class="SubjectsSelect pure-button ">Vocabulary</button></p>
                </div>
                <!--
                <div class="pure-u-1-3">
                    <p><button class="SubjectsSelect pure-button ">Writing</button></p>
                </div>
-->
            </div>

            <div id="MenuSide">
                <div class="tab">
                    <button class="tablinks" onclick="shoSheet(event, 'Math')" id="defaultOpen">Math</button>
                    <button class="tablinks" onclick="shoSheet(event, 'Tracing')">Tracing</button>
                    <button class="tablinks" onclick="shoSheet(event, 'Reading')">Reading</button>
                    <button class="tablinks" onclick="shoSheet(event, 'Vocabulary')">Vocabulary</button>
                    <button class="tablinks" onclick="shoSheet(event, 'Writing')">Writing</button>
                </div>
            </div>

            <div id="MenuDrop" class="pure-g" style="text-align-last: center; font-size: 2.5em;">
                <select class="pure-u-1" name="DropDownMenu" id="DropDownMenu" onchange="shoSheett()">
                    <option value="About" selected></option>
                    <option value="Math">Math</option>
                    <option value="Tracing">Tracing</option>
                    <option value="Reading">Reading</option>
                    <option value="Vocabulary">Vocabulary</option>
                    <option value="Writing">Writing</option>
                </select>
            </div>
        </div>
        <div class="Contained">
            <div class="About formz" style="xdisplay:none; border-radius: 30px; border: 2px solid black; background-color: white; padding: 20px;">
                <span>
                    <h3>Welcome to SHEETS.</h3>
                    <p style="text-align: left;">Sheets is a free educational worksheet generator, great for teaching children new concepts or practing old ones. Create random or custom Math, Reading, Tracing and Vocabulary worksheets specific to your child's learning level. Print them out and done. <br />It's simple. It's easy. It's Sheets.</p>
                </span>
            </div>
            <!--MATH FORM AREA--------------------------->
            <!--MATH FORM AREA--------------------------->
            <div class="Math formz" style="display:none;  background-color: white;">
                <div class="howz">
                    <ul>
                        <li>Select a specific math operation.</li>
                        <ul>
                            <li>Choose between simple or challenging.</li>
                            <li>Then set the number range for the problems and how many questions per sheet. </li>
                            <li>Click Create and print.</li>
                            <li>Click "answers" to print an answer key.</li>
                        </ul>
                    </ul> To generate a new worksheet, click "NEW".
                </div>
                <br />
                <div class="pure-g arithmetic Sma">
                    <div class="pure-u-1-6" name="+">
                        <p><button class="pure-button button-secondary" value="#43">&#43;</button></p>
                    </div>
                    <div class="pure-u-1-6" name="-">
                        <p><button class="pure-button" value="#8722">&#8722;</button></p>
                    </div>
                    <div class="pure-u-1-6" name="x">
                        <p><button class="pure-button" value="#215">&#215;</button></p>
                    </div>
                    <div class="pure-u-1-6" name="/">
                        <p><button class="pure-button" value="#247">&#247;</button></p>
                    </div>
                    <div class="pure-u-1-6" name="<>">
                        <p>
                            <button class="pure-button" value="#60#62">&#60;&#62;</button></p>
                    </div>
                    <div class="pure-u-1-6" name="(X)">
                        <p>
                            <button class="pure-button" value="xscr">(&xscr;)</button></p>
                    </div>
                </div>
                <form class="pure-form" id="maths">
                    <fieldset>
                        <legend>Setup</legend>
                        Number Range:
                        <input class="pure-input-1-4" id="num1" type="text" value="0" maxlength="7" />
                        to
                        <input class="pure-input-1-4" id="num2" type="text" value="9" maxlength="7" />

                        <br />

                        <br />
                        How many quesitons?
                        <input class="pure-input-1-5" id="numQues" type="text" value="20" maxlength="2" /><br />
                        <div class="pure-u-1" id="Alegebric" style="display:none;">
                            <fieldset>
                                <legend>Alegebra Operators</legend>
                                First:<select name="ale1" id="ale1">
                                    <option value="random1">random</option>
                                    <option value="add1">&#43;</option>
                                    <option value="subtract1">&#8722;</option>
                                    <option value="multiply1">&#215;</option>
                                    <option value="divide1">&#247;</option>
                                </select>
                                &nbsp;&nbsp;&nbsp;
                                Second:<select name="ale2" id="ale2">
                                    <option value="random2">random</option>
                                    <option value="add2">&#43;</option>
                                    <option value="subtract2">&#8722;</option>
                                    <option value="multiply2">&#215;</option>
                                    <option value="divide2">&#247;</option>
                                </select>
                            </fieldset>
                        </div><br />
                        <div style="margin: 10px; display: inline;">
                            |
                            <input type="radio" id="1" name="Level" value="1" checked />
                            <label for="1">Simple</label> |
                            <input type="radio" id="2" name="Level" value="2" />
                            <label for="2">Challenging</label> |
                        </div><br /><br />
                        <button id="math" class="pure-button pure-button-primary">
                            Create</button>
                    </fieldset>
                    <br />
                </form>
            </div>

            <!--TRACING FORM AREA-------------------------->
            <!--TRACING FORM AREA-------------------------->
            <div class="Tracing formz" style="display: none;  background-color: white;">
                <div class="howz">
                    <ul>
                        <li>
                            Choose from any of the tracing options.
                        </li>
                        <li>
                            Trace shapes, numbers and letters or create a custom name worksheet.
                        </li>
                        <li>
                            Select challenging for copying practice.
                        </li>
                    <li>
                    Click Create, then print.
                    </li>
                    </ul>
                    
                      To generate a new worksheet, click "NEW".
                </div>
                <div class="pure-g" style="justify-content: center;">
                    <br />
                    <div class="pure-u-1">
                        <div style="margin: 10px;">
                            |
                            <input type="radio" id="na" name="wType" value="na" />
                            <label for="na">Name</label> |
                            <input type="radio" id="sh" name="wType" value="sh" />
                            <label for="sh">Shapes</label> |<br /><br />
                            Alphanumeric<br />|
                            <input type="radio" id="a" name="wType" value="a" />
                            <label for="a">All</label> |
                            <input type="radio" id="s" name="wType" value="s" />
                            <label for="s">Specific</label> |
                            <input type="radio" id="r" name="wType" value="r" checked />
                            <label for="r">Random</label> |
                        </div>
                        <hr style="width: 60%;">
                    </div>
                    <div class="pure-u-1 stylePick">
                        Style:
                        <div id="trace" name="traceMe" class="traceMe wStyle pure-u-1 SwS">ABC123</div>
                        <div id="dots" name="dotsMe" class="dotsMe wStyle pure-u-1">ABC123</div>
                    </div>
                    <!--all Subform for choosing specific sets to print...-->
                    <div class="pure-u-1 allSubForm" style="display: none;">
                        <div class="pure-u-1 allSubForm">
                            Include:<br />
                            <div class="pure-u-1">
                                <select name="writeAll" id="writeAll">
                                    <option value="A">A-Z</option>
                                    <option value="0">0-9</option>
                                    <option value="z">a-z</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!--specific Subform for choosing specific sets to print...-->
                    <div class="pure-u-1 specificSubForm" style="display: none;">
                        Choose a letter from A-z or number from 0-9:
                        <input id="AlphaNumeric" type="text" class="pure-u-1-6" style="text-align: center" value="a" maxlength="1" />
                    </div>

                    <!--name Subform for choosing specific sets to print...-->
                    <div class="pure-u-1 nameSubForm" style="display: none;">
                        <input class='traceMe pure-u-1' id='naammee' style='border: 1px solid black; border-radius:20; text-align:center; padding: 10px 0px; font-size: 3rem!important;' type='text' maxlength='20' value='NAME' id='kidsName' />
                    </div>

                    <!--random Subform for choosing specific sets to print...-->
                    <div class="pure-u-1 randSubForm">
                        Include:<br />
                        <div class="pure-u-1-4">
                            <input type="checkbox" id="AlphaUpper" name="AlphaUpper" value="Upper" checked />
                            <label for="AlphaUpper">A-Z</label><br />
                        </div>
                        <div class="pure-u-1-4">
                            <input type="checkbox" id="AlphaLower" name="AlphaLower" value="Lower" />
                            <label for="AlphaLower">a-z</label><br />
                        </div>
                        <div class="pure-u-1-4">
                            <input type="checkbox" id="Numeric" name="Numeric" value="Numbers" checked />
                            <label for="Numeric">0-9</label><br />
                        </div>
                    </div>

                    <!--shape Subform for choosing specific sets to print...-->
                    <div class="pure-u-1 shapeSubForm" style="display: none;">
                        <select name="selShape" id="selShape">
                            <option value="rand">Random</option>
                            <option value="spec">Specific</option>
                        </select><br><br>
                        <div class="subsub" style="display: none;"></div>
                    </div>
                </div>
                <br />Trace how many?<br />
                <input type="text" id="wAmount" value="20" style="text-align: center;" maxlength="2" />
                <br /><br />
                <input type="checkbox" id="TraceChallenge" name="TraceChallenge" />
                <label for="TraceChallenge">Challenging</label><br>
                <br />
                <button id="tracing" class="pure-button pure-button-primary">
                    Create</button>
                <br /><br />
            </div>

            <!--READING FORM AREA--------------------------->
            <!--READING FORM AREA--------------------------->
            <div class="Reading formz" style="display:none; background-color: white;">
                <div class="howz">
                  <ul>
                  <li>
                     To Create random instructional sentences.
                  </li>
                    <ul>
                     <li>
                         Selection the parameters for the random sentences.
                     </li>
                      <li>
                    Click Create, then print.
                      </li>
                      </ul>
                  </ul>
                   
                     To generate a new worksheet, click "NEW". </div>
                <div class="pure-g">
                    <div class="pure-u-1">
                        <!--                        <select name="" id=""></select>-->
                        <div class="pure-u-1-3" style="margin-top: 18px">
                            <label for="rshapes">
                                <img src="svgs/Circle.svg" class="rTiny" alt="">
                                <img src="svgs/Triangle.svg" class="rTiny" alt="">
                                <img src="svgs/Square.svg" class="rTiny" alt=""><br>
                                SHAPES<br />
                            </label><br>
                            <input type="checkbox" id="rshapes" name="rshapes" value="rshape" checked /></div>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <div class="pure-u-1-3">
                            <label for="rnumbers">
                                <span class="outlineMe">
                                    1 2 3
                                </span>
                                <br>Numbers<br />
                            </label><br>
                            <input type="checkbox" id="rnumbers" name="rnumbers" value="rnumber" checked /></div>

                        <hr style="width: 75%" />

                        <div class="pure-u-1-3">
                            <label class="circleMe" id="rrcircle" for="rcircle" style="font-size: 2em">CIRCLE</label><br />
                            <input type="checkbox" id="rcircle" name="rcircle" checked /></div>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <div class="pure-u-1-3">
                            <label id="rrcolor" for="rcolor" class="outlineMe rainbowMe" style="font-size: 2rem">COLOR</label><br />
                            <input type="checkbox" id="rcolor" name="rcolor" checked /></div>

                        <br />How many?<br />
                        <input type="text" id="rAmount" value="6" style="text-align: center;" maxlength="2" />
                        <br /><br />
                        <button id="Reading" class="pure-button pure-button-primary">
                            Create</button>
                        <br>
                        <br>
                            <div style='display: inline; margin-right: 15px'>
                                <a href="ReadingWordList.html" target="_blank">Reading Words List</a>
                            </div> |
                            <div style='display: inline; margin_left: 15px'>
                                <a href="aiGenerate.php" target="_blank">Story Generator</a>
                                
                            </div>
                        <br/>

                    </div>
                </div>
            </div>

            <!--VOCABULARY FORM AREA--------------------------->
            <!--VOCABULARY FORM AREA--------------------------->
            <div class="Vocabulary formz" style="display:none; background-color: white;">
                <div class="howz">
                <ul>
                <li>
                Create a list of random vocabulary words.
                </li>
                <ul>
                <li>Set the amount of words you want populated.</li>
                <li>Select the letter length for the words you want on the sheet.</li>
                <li>
                Click Create. 
                </li>
                <li>
                Delete words from the sheet by clicking on the red x.
                </li>
                 <li>
                 Then print. 
                 </li>
                 </ul>
                 </ul>
                 To generate a new worksheet, click "NEW". </div>
<br/>
<br/>
                   <input onclick="VoToggle();" type="button" id="vButton" value="Specific"/>
                   <div id="VocabularyForm1">
                    <div id="Vtitle"> <br /> How many words?<br />
                    <input type="text" id="vAmount" value="24" style="text-align: center;" maxlength="2" /><br /><br />
                    </div>

                    Type of words?
                    <div class="vocabSelect1" style="margin: 10px;"> </div>
                    <div class="vocabSelect2" style="margin: 10px; display: none;"> </div>
                    <button id="Vocabulary" class="pure-button pure-button-primary">
                        Create</button>
                    <br />
                    <br />
                    <a href="100common.html" target="_blank">100 common words list</a>
                </div>
                <div id="VocabularyForm2">

                </div>
                <br />
                <br />
            </div>

            <!--WRITING FORM AREA--------------------------->
            <!--WRITING FORM AREA--------------------------->
            <div class="Writing formz" style="display:none; background-color: white;">
                <div class="pure-g">
                    <div class="pure-u-1">
                        <br />How many pictures?<br />
                        <input type="text" id="wrAmount" value="6" style="text-align: center;" maxlength="2" /><br /><br />

                        <button id="Writing" class="pure-button pure-button-primary">
                            Create</button>
                        <br />
                        <br />
                    </div>
                </div>
            </div>

        </div>
    </div>

           <script>
        // top buttons ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        function newer() {
            $(".AnsShow").hide();
            $(".Main").show();
            $(".printable").hide();
        }

        // math section //////////////////////////////////
        // math section //////////////////////////////////
        // math section //////////////////////////////////
        $("button#math").on("click", function() {
            FB.AppEvents.logPageView();
            var n1 = $("#num1").val();
            var n2 = $("#num2").val();
            var Qs = $("#numQues").val();
            var Arith = $(".button-secondary").val();
            var LvL = $("input[name=Level]:checked").val();
            var a1, a2;
            a1 = a2 = 0;
            if (Arith == "xscr") {
                a1 = $("#ale1").val();
                a2 = $("#ale2").val();
                $(".printable").html(mathForm(n1, n2, Qs, Arith, LvL, a1, a2));
                if (LvL == "2") {
                    var rranX;
                    //                    var pree = "<span class='solve' style='display:none'>";
                    var apee = "<div class='pure-u-1-8 notsolve'>&xscr;</div>";
                    for (i = 0; i <= Qs; i++) {
                        rranX = aleRandX();
                        //                        $(".aleQ:eq(" + i + ") > .aleNum:eq(" + rranX + ")").prepend(pree);
                        $(".aleQ:eq(" + i + ") > .aleNum:eq(" + rranX + ")").addClass("solve").hide();
                        $(".aleQ:eq(" + i + ") > .aleNum:eq(" + rranX + ")").after(apee);
                    }
                }
            } else {
                $(".printable").html(mathForm(n1, n2, Qs, Arith, LvL));
            }
            $(".AnsShow").show();
            $(".Main").hide();
            $(".printable").show();
            return false;
        });

        $(".arithmetic button").on("click", function() {
            $(".arithmetic button").removeClass("button-secondary");
            $(this).addClass("button-secondary");
            var aleale = $(this).attr("value");
            if (aleale == "xscr") {
                $("#Alegebric").show();
                $("#numQues").val("12");
            } else {
                $("#Alegebric").hide();
                $("#numQues").val("20");
            }
        });
        $(document).on("click", "#AnsShow", function() {
            $(".solve").toggle();
            $(".notsolve").toggle();
            $(".AnnS").toggle();
        });

        // tracing section //////////////////////////////////
        // tracing section //////////////////////////////////
        // tracing section //////////////////////////////////
        $("button#tracing").on("click", function() {
            FB.AppEvents.logPageView();
            var Amou = $("#wAmount").val();
            var Styl = $(".SwS").attr('id');
            var Szz = "Md";
            var AlNu = "";
            tracingStyle = Styl;
            tracingSize = Szz;
            //  var wType = $("input[name=wType]:checked").val();
            var wType = $("input[name=wType]:checked").attr('id');
            var level;
            if ($("#TraceChallenge").prop("checked") == true) {
                level = 1;
            } else {
                level = 0;
            }

            if (wType == "a") {
                AlNu = $("#writeAll").val();
                $(".printable").html(traceThis(Amou, Styl, wType, AlNu, level));
                chkRadio(Styl, Szz);
                $(".Main").hide();
                $(".printable").show();
            } else if (wType == "na") {
                AlNu = $("#naammee").val();
                $(".printable").html(traceThis(Amou, Styl, wType, AlNu, level));
                chkRadio(Styl, Szz);
                $(".Main").hide();
                $(".printable").show();
            } else if (wType == "s") {
                AlNu = $("#AlphaNumeric").val();
                $(".printable").html(traceThis(Amou, Styl, wType, AlNu, level));
                chkRadio(Styl, Szz);
                $(".Main").hide();
                $(".printable").show();
            } else if (wType == "sh") {
                var star, cir, tri, squ, ova, rec, heart, pent, hex, sep, ar2, clo, dou, dia, ar1;
                star = cir = tri = squ = heart = pent = hex = sep = ar2 = clo = dou = dia = ar1 = 0;
                if ($("#star").prop("checked") == true) {
                    star = 1;
                } else {
                    star = 0;
                }
                if ($("#circle").prop("checked") == true) {
                    cir = 1;
                } else {
                    cir = 0;
                }
                if ($("#triangle").prop("checked") == true) {
                    tri = 1;
                } else {
                    tri = 0;
                }
                if ($("#square").prop("checked") == true) {
                    squ = 1;
                } else {
                    squ = 0;
                }
                if ($("#oval").prop("checked") == true) {
                    ova = 1;
                } else {
                    ova = 0;
                }
                if ($("#rectangle").prop("checked") == true) {
                    rec = 1;
                } else {
                    rec = 0;
                }
                if ($("#heart").prop("checked") == true) {
                    heart = 1;
                } else {
                    heart = 0;
                }
                if ($("#pentagon").prop("checked") == true) {
                    pent = 1;
                } else {
                    pent = 0;
                }
                if ($("#hexagon").prop("checked") == true) {
                    hex = 1;
                } else {
                    hex = 0;
                }
                if ($("#septagon").prop("checked") == true) {
                    sep = 1;
                } else {
                    sep = 0;
                }
                if ($("#arrow2").prop("checked") == true) {
                    ar2 = 1;
                } else {
                    ar2 = 0;
                }
                if ($("#cloud").prop("checked") == true) {
                    clo = 1;
                } else {
                    clo = 0;
                }
                if ($("#donut").prop("checked") == true) {
                    dou = 1;
                } else {
                    dou = 0;
                }
                if ($("#diamond").prop("checked") == true) {
                    dia = 1;
                } else {
                    dia = 0;
                }
                if ($("#arrow1").prop("checked") == true) {
                    ar1 = 1;
                } else {
                    ar1 = 0;
                }

                var Code = star + "" + cir + "" + tri + "" + squ + "" + ova + "" + rec + "" + heart + "" + pent + "" + hex + "" + sep + "" + ar2 + "" + clo + "" + dou + "" + dia + "" + ar1;

                if ($("#selShape").val() == "spec") {
                    if (Code === "00000000000000") {
                        alert("No shape was included. please try again.");
                    } else {
                        $(".printable").html(traceThis(Amou, Styl, wType, Code, level));
                        $(".Main").hide();
                        $("#wa1").hide();
                        radiobtn = document.getElementById("Md");
                        radiobtn.checked = true;
                        $(".printable").show();
                    }
                } else {
                    Code = "a";
                    $(".printable").html(traceThis(Amou, Styl, wType, Code, level));
                    radiobtn = document.getElementById("Md");
                    radiobtn.checked = true;
                    $(".Main").hide();
                    $("#wa1").hide();
                    $(".printable").show();
                }

            } else if (wType == "r") {
                var cap, low, nuu;
                cap = low = nuu = 0;

                if ($("#AlphaUpper").prop("checked") == true) {
                    cap = 1;
                } else {
                    cap = 0;
                }
                if ($("#AlphaLower").prop("checked") == true) {
                    low = 1;
                } else {
                    low = 0;
                }
                if ($("#Numeric").prop("checked") == true) {
                    nuu = 1;
                } else {
                    nuu = 0;
                }
                var Codes = cap + "" + low + "" + nuu;
                if (Codes == "000") {
                    alert("Nothing was included. please try again.");
                } else {
                    $(".printable").html(traceThis(Amou, Styl, wType, Codes, level));
                    chkRadio(Styl, Szz);
                    $(".Main").hide();
                    $(".printable").show();
                }
            } else {}
        });

        $(".wStyle").on("click", function() {
            $(".wStyle").removeClass("SwS");
            $(this).addClass("SwS");
            var qstyle = $(".SwS").attr('name');
            $("#naammee").removeClass();
            $("#naammee").addClass(qstyle);
        });

        //        change the size on the fly /////////////////////////////////////
        $(document).on("click", "input[name=newSize]", function() {
            var nuSize = $("input[name=newSize]:checked").attr('id');
            if (nuSize == "Sm") {
                $(".reads").addClass("Sm");
                tracingSize = "Sm";
                $(".reads").removeClass("Md Lr XL");
                //                $(".reads").removeClass("Lr");
            } else if (nuSize == "Md") {
                $(".reads").addClass("Md");
                tracingSize = "Md";
                $(".reads").removeClass("Sm Lr XL");
                //                $(".reads").removeClass("Lr");
            } else if (nuSize == "XL") {
                $(".reads").addClass("XL");
                tracingSize = "XL";
                $(".reads").removeClass("Sm Md Lr");
                //                $(".reads").removeClass("Lr");
            } else if (nuSize == "Lr") {
                $(".reads").addClass("Lr");
                tracingSize = "Lr";
                $(".reads").removeClass("Sm Md XL");
                //                $(".reads").removeClass("Md");
            } else {}
        });

        //        Change the font on the fly /////////////////////////////////////
        $(document).on("click", "input[name=newStyle]", function() {
            var nuStyle = $("input[name=newStyle]:checked").attr('id');
            if (nuStyle == "newLines") {
                $(".reads>.dotsMe, #kidsName").addClass("traceMe");
                $(".reads").removeClass("Sm Md Lr XL");
                $(".reads").addClass(tracingSize);
                tracingStyle = "trace";
                $(".reads>.dotsMe, #kidsName").removeClass("dotsMe");
                $("#trace,#dots").removeClass("SwS");
                $("#trace").addClass("SwS");
                $("#naammee").addClass("traceMe");
                $("#naammee").removeClass("dotsMe");
            } else if (nuStyle == "newDots") {
                $(".reads>.traceMe, #kidsName").addClass("dotsMe");
                $(".reads").removeClass("Sm Md Lr XL");
                $(".reads").addClass(tracingSize);
                tracingStyle = "dots";
                $(".reads>.traceMe, #kidsName").removeClass("traceMe");
                $("#trace,#dots").removeClass("SwS");
                $("#dots").addClass("SwS");
                $("#naammee").removeClass("traceMe");
                $("#naammee").addClass("dotsMe");
            } else {}
        });

        //        Showing the correct sub form to display /////////////////////////
        $("input[name=wType]").on("click", function() {
            //           if ($("input[name=wType]:checked")==true)
            var SR = $("input[name=wType]:checked").attr('id');
            if (SR == "s") {
                $(".randSubForm").hide();
                $(".allSubForm").hide();
                $(".nameSubForm").hide();
                $(".shapeSubForm").hide();
                $(".specificSubForm").show();
                $(".stylePick").show();
                $("#wAmount").val("19");
                $("#wAmount").attr("disabled", false);
            } else if (SR == "r") {
                $(".specificSubForm").hide();
                $(".nameSubForm").hide();
                $(".allSubForm").hide();
                $(".shapeSubForm").hide();
                $(".randSubForm").show();
                $(".stylePick").show();
                $("#wAmount").val("19");
                $("#wAmount").attr("disabled", false);
            } else if (SR == "a") {
                $(".specificSubForm").hide();
                $(".randSubForm").hide();
                $(".nameSubForm").hide();
                $(".shapeSubForm").hide();
                $(".allSubForm").show();
                $(".stylePick").show();
                $("#wAmount").val("1");
                $("#wAmount").attr("disabled", true);
            } else if (SR == "na") {
                $(".specificSubForm").hide();
                $(".randSubForm").hide();
                $(".allSubForm").hide();
                $(".shapeSubForm").hide();
                $(".nameSubForm").show();
                $(".stylePick").show();
                $("#wAmount").val("3");
                $("#wAmount").attr("disabled", false);
            } else if (SR == "sh") {
                $(".specificSubForm").hide();
                $(".randSubForm").hide();
                $(".allSubForm").hide();
                $(".nameSubForm").hide();
                $(".shapeSubForm").show();
                $(".stylePick").hide();
                $("#wAmount").val("9");
                $("#wAmount").attr("disabled", false);
            } else {}
        });

        $("select[name=selShape]").on("change", function() {
            var selShape = $("select[name=selShape]").val();
            if (selShape == "rand") {
                $(".subsub").hide();
            } else if (selShape == "spec") {
                $(".subsub").show();
            } else {
                console.log("Something wrong with subsub")
            }
        });

        $(document).on('change', '#kidsName', function() {
            if (writeOn == "na") {
                $("#naammee").val($('#kidsName').val());
                $(".reads > .traceMe").text($('#kidsName').val());
                $(".reads > .dotsMe").text($('#kidsName').val());
            } else {}
        })


        // Reading section //////////////////////////////////
        // Reading section //////////////////////////////////
        // Reading section //////////////////////////////////
        $("button#Reading").on("click", function() {
            //            FB.AppEvents.logPageView();
            var ColCir = 0;
            var ShaNum = 0;
            if ($("#rcircle").prop("checked") == true) {
                if ($("#rcolor").prop("checked") == true) {
                    ColCir = 3;
                } else {
                    ColCir = 1;
                }
            } else if ($("#rcolor").prop("checked") == true) {
                ColCir = 2;
            } else {}
            if ($("#rshapes").prop("checked") == true) {
                if ($("#rnumbers").prop("checked") == true) {
                    ShaNum = 3;
                } else {
                    ShaNum = 1;
                }
            } else if ($("#rnumbers").prop("checked") == true) {
                ShaNum = 2;
            } else {}
            var Amount = $("#rAmount").val();

            $(".printable").html(ReadingForm(ShaNum, ColCir, Amount));
            $(".Main").hide();
            $(".printable").show();
            return false;
        });

        $("#rcolor").on("click", function() {
            $("#rrcolor").toggleClass("rainbowMe");
        });
        $("#rcircle").on("click", function() {
            $("#rrcircle").toggleClass("circleMe");
        });



        // Vocabulary section //////////////////////////////////
        // Vocabulary section //////////////////////////////////
        // Vocabulary section //////////////////////////////////
       function VoToggle(){
           if ($("#vButton").attr("value") != "Specific"){
               $("#vButton").attr("value","Specific");
               $("#Vtitle").show();
               $(".vocabSelect2").hide();
               $(".vocabSelect1").show();
           }else {
               $("#vButton").attr("value","Random");
               $("#Vtitle").hide();
               $(".vocabSelect2").show();
               $(".vocabSelect1").hide();
           }
       }
        $("button#Vocabulary").on("click", function() {
//            FB.AppEvents.logPageView();
            
            if ($(".vocabSelect1").is(":visible")){
            var LetterAmount = $("input[name=Letters]:checked").val();
            var wordAmount = $("#vAmount").val();

            $(".printable").html(VocabularyForm(LetterAmount, wordAmount));
                $(".Main").hide();
                $(".printable").show();
            }else {
                var st,con,nd,num;
                st = $("#vocabST").val();
                con = $("#vocabCON").val();
                nd = $("#vocabND").val();
                num = $("#vocabNUM").val();
                
                
//                 goChk();
                $(".printable").html(VocabularyForm2(st,con,nd,num));
                $(".Main").hide();
                $(".printable").show();
                $("#wordsNumber").html(cWord+" words");

            }

            return false;
        });

        $(document).on("click", ".rr", function() {
            var LetterAmount = $("input[name=Letters]:checked").val();
            $(this).parent().remove();
            $(".readUs").append(addVocabulary(LetterAmount));
        });
        $(document).on("click", ".rr2", function() {
            $(this).parent().remove();
            cWord--;
            $("#wordsNumber").html(cWord+" words");
        });
        LoadLetterSection();



        // Writing section //////////////////////////////////
        // Writing section //////////////////////////////////
        // Writing section //////////////////////////////////
        $("button#Writing").on("click", function() {
            var writeAmount = $("#wrAmount").val();
            WritingForm(writeAmount);
            return false;
        });

        $(".subsub").html(selectShapes());
        $(document).on("click", ".TracingShapesSub", function() {
            $(this).parent().toggleClass("solve");
        });

        $("div.howz").before("<button onclick=\"$('div.howz').toggle();\" style='width: 75px; height: 25px;'>How To</button>");
        $("div.howz").append("<hr style='border: 1px dotted;' />");

        
        $(".Main").after(footer());
        
        function footer(){
            var output = "";
            output +=`<div class="footer DontPrintMe" style="position: relative; bottom: 0px; z-index: -50;">
        Sheets is a project of <a href="https://inlightglory.com" style="color: blue">InLight Glory LLC.</a><br />
        created by: Aquil Roberts<br />
        &copy 2019 - <?php echo date("Y"); ?>
    </div>`;
            return output;
        }
    </script>
</body>
</html>
<?php ?>
