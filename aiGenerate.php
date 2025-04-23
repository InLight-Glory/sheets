<?php ?>

<!DOCTYPE html>
<html lang="en">

<head profile="http://inlightglory.com/sheets">
    <meta property="og:title" content="Worksheets" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="Quickly create simple or challenging worksheets for your kids and/or students." />
    <meta property="og:url" content="https://inlightglory.com/sheets" />
    <meta property="og:image:url" content="https://inlightglory.com/sheets/ogSheetsHeader.png" />
    <meta property="og:image" content="https://inlightglory.com/sheets/ogSheetsHeader.png" />
    <meta property="og:image:type" content="image/png" />
    <meta property="fb:app_id" content="179151353174159" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <style>
        body{
            background-color: #ccc;

        }
        form > * {
            display: block;
        }

        form > * > * {
            display: inline;
        }
        .hide {
            display:none;
        }
    </style>
    <style type="text/css" media="print">
        .DontPrintMe {
            display: none;
        }

    </style>
    <script>
        async function storyit(){
            var gender = document.querySelector('#characterGender').value;
            var CharName = document.querySelector('#characterName').value;
            var genre = document.querySelector('#genre').value;
            var timeperiod = document.querySelector('#timeperiod').value;
            var readerAge = document.querySelector('#readerAge').value;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var formHide = document.querySelector('#aiGenerateForm');
                    formHide.classList.add("hide");
                    var output = this.responseText.toString().split("{");
                    document.querySelector('#SeeStory').innerHTML = output[0];
                } else {
                    document.querySelector('#SeeStory').innerHTML = 'Generating...';
                }
            };
            xhttp.open("POST", "aiScript.php", true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send("gender="+gender+"&characterName="+CharName+"&genre="+genre+"&timeperiod="+timeperiod+"&readerAge="+readerAge+"");
        }
    </script>
</head>
<body>
    <div class="DontPrintMe">
    <form name="aiGenerate" id='aiGenerateForm' >
        <div>
            Gender of the Character:
            <select name="gender" id="characterGender">
                <option value="boy">Boy</option>
                <option value="girl">Girl</option>
            </select>
        </div>
        <div style='margin: 0 0 30px 0'>
            Name of the Character:
            <input name="characterName" type="text" id="characterName"/>
        </div>
        
        <div>
            Type of Story:
            <select name="genre" id="genre">
                <option value="adventure">Adventure</option>
                <option value="comedy">Comedy</option>
                <option value="western">Western</option>
                <option value="fantasy">Fantasy</option>
                <option value="action">Action</option>
                <option value="mystery">Mystery</option>
                <option value="Thriller">Thriller</option>
                <option value="historical fiction">Historical Fiction</option>
                <option value="superhero fiction">Superhero Fiction</option>
                <option value="utopian fiction">Utopian Fiction</option>
                <option value="dystopian fiction">Dystopian Fiction</option>
                <option value="science fiction">Science Fiction</option>
            </select>
        </div>

        <div style='margin: 0 0 30px 0'>
            Set in the: 
            <select name="timeperiod" id="timeperiod"  >
                <option value="present">Present</option>
                <option value="past">Past</option>
                <option value="future">Future</option>
            </select>
        </div><br/>

        <div>
            Age of the reader:
            <input name="readerAge" type="text" id="readerAge" style='width: 40px' maxlength="2"/>
        </div>
        <button type="button" onclick="return storyit()" value="Generate">Generate</button>
    </form>
    <br/>
    <button onclick="self.close()" style="margin: 5px; display: inline;">Close</button> | 
    <INPUT style="margin: 5px; display: inline;" TYPE="button" onClick="window.print();" VALUE="PRINT"/>
    </div>
     <div class="printable" id='SeeStory' style='display: absolute; float:bottom; border: 5px solid black; margin: 25px 0; font-size: 1.3rem'>
        
     </div> 
</body>