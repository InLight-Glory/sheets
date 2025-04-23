function VocabularyForm2(st,con,nd,num) {
    cWord = 0;
    nd = nd+" ";
        var dbv = JSON.parse(main);
 
     var outputr = "";
    outputr +="<div id='wordsNumber' style='float: right'></div>";
  outputr += '<div style="text-align:right; width:90%;"><INPUT TYPE="button" onClick="newer();" VALUE="NEW"/> || ';
  outputr += '<INPUT TYPE="button" onClick="window.print();" VALUE="PRINT"/></div>';
    outputr += "<div class='pure-g readUs' style='font-size:1.5rem; margin: 0 auto; padding-top:25px; background-color:white;justify-content: center; border-bottom: 2px dotted black;'><div class='pure-u-1' style='text-align:center;'><input class='traceMe' style='border: 1px solid black; border-radius:20; text-align:center; padding: 10px 0px; font-size: 3rem!important;' type='text' maxlength='20' value='name' name='name' /></div>";


    if (num.includes("-")){
        var nums = num.split("-"); var numt;
        var num1 = parseInt(nums[0]);
        var num2 = parseInt(nums[1]);
        if (num1 > num2){
            numt = num1;
            num1 = num2;
            num2 = numt;
        }
        var t = num1;
        while (t <= num2) {
            var wordsCount = dbv["wordsof"][t]["items"].length;     
                //  alert(dbb["wordsof"][num]["items"][5]);
            for (var i=0; i<wordsCount; i++){
            var word = dbv["wordsof"][t]["items"][i];
                if (st != ""){
                    if (chkWord(word,st,"s")==true){
                        if (con != ""){
                            if (chkWord(word,con,"c")==true){
                                if (nd != ""){
                                    if (chkWord(word,nd,"e")==true){
                                        outputr += '<div class="pure-u-1-3 reads" style="border: 2px solid black; border-radius: 10%; margin: 10px; width: 20%; text-align: center;">'+
                                        '<div class="rr2" style="width: 80%; height: 15%; margin: 0 auto; display: inline-block; vertical-align: top; font-size: 1rem; cursor: pointer;margin-bottom: 10%; padding-bottom: 8px;">x</div><br/>';
                                        outputr += "<div style='margin-bottom: 20%;'><a href='https://www.thefreedictionary.com/"+ word +"' target='_blank' style='color: black;'>" + word + "</div></a></div>";cWord++;
                                    }
                                }
                                else { 
                                outputr += '<div class="pure-u-1-3 reads" style="border: 2px solid black; border-radius: 10%; margin: 10px; width: 20%; text-align: center;">'+
                                '<div class="rr2" style="width: 80%; height: 15%; margin: 0 auto; display: inline-block; vertical-align: top; font-size: 1rem; cursor: pointer;margin-bottom: 10%; padding-bottom: 8px;">x</div><br/>';
                                outputr += "<div style='margin-bottom: 20%;'><a href='https://www.thefreedictionary.com/"+ word +"' target='_blank' style='color: black;'>" + word + "</div></a></div>";cWord++;
                                }    
                            }
                        }
                        else if (nd != ""){
                            if (chkWord(word,nd,"e")==true){
                                outputr += '<div class="pure-u-1-3 reads" style="border: 2px solid black; border-radius: 10%; margin: 10px; width: 20%; text-align: center;">'+
                                '<div class="rr2" style="width: 80%; height: 15%; margin: 0 auto; display: inline-block; vertical-align: top; font-size: 1rem; cursor: pointer;margin-bottom: 10%; padding-bottom: 8px;">x</div><br/>';
                                outputr += "<div style='margin-bottom: 20%;'><a href='https://www.thefreedictionary.com/"+ word +"' target='_blank' style='color: black;'>" + word + "</div></a></div>";cWord++;
                            }
                        }
                        else {
                            outputr += '<div class="pure-u-1-3 reads" style="border: 2px solid black; border-radius: 10%; margin: 10px; width: 20%; text-align: center;">'+
                            '<div class="rr2" style="width: 80%; height: 15%; margin: 0 auto; display: inline-block; vertical-align: top; font-size: 1rem; cursor: pointer;margin-bottom: 10%; padding-bottom: 8px;">x</div><br/>';
                            outputr += "<div style='margin-bottom: 20%;'><a href='https://www.thefreedictionary.com/"+ word +"' target='_blank' style='color: black;'>" + word + "</div></a></div>";cWord++;
                        }
                    }
                }
                else if (con != ""){
                    if (chkWord(word,con,"c")==true){
                        if (nd != ""){
                            if (chkWord(word,nd,"e")==true){
                                outputr += '<div class="pure-u-1-3 reads" style="border: 2px solid black; border-radius: 10%; margin: 10px; width: 20%; text-align: center;">'+
                                '<div class="rr2" style="width: 80%; height: 15%; margin: 0 auto; display: inline-block; vertical-align: top; font-size: 1rem; cursor: pointer;margin-bottom: 10%; padding-bottom: 8px;">x</div><br/>';
                                outputr += "<div style='margin-bottom: 20%;'><a href='https://www.thefreedictionary.com/"+ word +"' target='_blank' style='color: black;'>" + word + "</div></a></div>";cWord++;
                            }
                        }
                        else {
                            outputr += '<div class="pure-u-1-3 reads" style="border: 2px solid black; border-radius: 10%; margin: 10px; width: 20%; text-align: center;">'+
                            '<div class="rr2" style="width: 80%; height: 15%; margin: 0 auto; display: inline-block; vertical-align: top; font-size: 1rem; cursor: pointer;margin-bottom: 10%; padding-bottom: 8px;">x</div><br/>';
                            outputr += "<div style='margin-bottom: 20%;'><a href='https://www.thefreedictionary.com/"+ word +"' target='_blank' style='color: black;'>" + word + "</div></a></div>";cWord++;
                        }
                    }
                }
                else if (nd != ""){
                    if (chkWord(word,nd,"e")==true){
                        outputr += '<div class="pure-u-1-3 reads" style="border: 2px solid black; border-radius: 10%; margin: 10px; width: 20%; text-align: center;">'+
                        '<div class="rr2" style="width: 80%; height: 15%; margin: 0 auto; display: inline-block; vertical-align: top; font-size: 1rem; cursor: pointer;margin-bottom: 10%; padding-bottom: 8px;">x</div><br/>';
                        outputr += "<div style='margin-bottom: 20%;'><a href='https://www.thefreedictionary.com/"+ word +"' target='_blank' style='color: black;'>" + word + "</div></a></div>";
                        cWord++;
                    }
                }
                else {
                    alert ("Error: No MATCH FOUND.");
                }
            }
          
    outputr += '<div class="pure-u-1 DontPrintMe" style="cursor: pointer; text-align: center;">'+ 
        '<i id="bx'+t+'" class="eye slash icon" onclick=" $(this).parent().parent().next().hide(); $(\'#by'+t+'\').show(); $(this).hide(); "> Hide</i>'+
        '<i id="by'+t+'" class="eye icon" onclick=" $(this).parent().parent().next().show(); $(\'#bx'+t+'\').show(); $(this).hide()" style="display:none"> Show</i> </div>'
            
            outputr += "</div><div class='pure-g readUs' style='font-size:1.5rem; margin: 0 auto; padding-top:25px; background-color:white;justify-content: center; border-bottom: 2px dotted black;'>";
        t++;
        }
        
          return outputr;
    } 
    else if(num.includes(",")){
            
            }
    else {
var wordsCount = dbv["wordsof"][num]["items"].length;
        //  alert(dbb["wordsof"][num]["items"][5]);
            for (var i=0; i<wordsCount; i++){
            var word = dbv["wordsof"][num]["items"][i];
                if (st != ""){
                    if (chkWord(word,st,"s")==true){
                        if (con != ""){
                            if (chkWord(word,con,"c")==true){
                                if (nd != ""){
                                    if (chkWord(word,nd,"e")==true){
                                        outputr += '<div class="pure-u-1-3 reads" style="border: 2px solid black; border-radius: 10%; margin: 10px; width: 20%; text-align: center;">'+
                                        '<div class="rr2" style="width: 80%; height: 15%; margin: 0 auto; display: inline-block; vertical-align: top; font-size: 1rem; cursor: pointer;margin-bottom: 10%; padding-bottom: 8px;">x</div><br/>';
                                        outputr += "<div style='margin-bottom: 20%;'><a href='https://www.thefreedictionary.com/"+ word +"' target='_blank' style='color: black;'>" + word + "</div></a></div>";cWord++;
                                    }
                                }
                                else { 
                                outputr += '<div class="pure-u-1-3 reads" style="border: 2px solid black; border-radius: 10%; margin: 10px; width: 20%; text-align: center;">'+
                                '<div class="rr2" style="width: 80%; height: 15%; margin: 0 auto; display: inline-block; vertical-align: top; font-size: 1rem; cursor: pointer;margin-bottom: 10%; padding-bottom: 8px;">x</div><br/>';
                                outputr += "<div style='margin-bottom: 20%;'><a href='https://www.thefreedictionary.com/"+ word +"' target='_blank' style='color: black;'>" + word + "</div></a></div>";cWord++;
                                }    
                            }
                        }
                        else if (nd != ""){
                            if (chkWord(word,nd,"e")==true){
                                outputr += '<div class="pure-u-1-3 reads" style="border: 2px solid black; border-radius: 10%; margin: 10px; width: 20%; text-align: center;">'+
                                '<div class="rr2" style="width: 80%; height: 15%; margin: 0 auto; display: inline-block; vertical-align: top; font-size: 1rem; cursor: pointer;margin-bottom: 10%; padding-bottom: 8px;">x</div><br/>';
                                outputr += "<div style='margin-bottom: 20%;'><a href='https://www.thefreedictionary.com/"+ word +"' target='_blank' style='color: black;'>" + word + "</div></a></div>";cWord++;
                            }
                        }
                        else {
                            outputr += '<div class="pure-u-1-3 reads" style="border: 2px solid black; border-radius: 10%; margin: 10px; width: 20%; text-align: center;">'+
                            '<div class="rr2" style="width: 80%; height: 15%; margin: 0 auto; display: inline-block; vertical-align: top; font-size: 1rem; cursor: pointer;margin-bottom: 10%; padding-bottom: 8px;">x</div><br/>';
                            outputr += "<div style='margin-bottom: 20%;'><a href='https://www.thefreedictionary.com/"+ word +"' target='_blank' style='color: black;'>" + word + "</div></a></div>";cWord++;
                        }
                    }
                }
                else if (con != ""){
                    if (chkWord(word,con,"c")==true){
                        if (nd != ""){
                            if (chkWord(word,nd,"e")==true){
                                outputr += '<div class="pure-u-1-3 reads" style="border: 2px solid black; border-radius: 10%; margin: 10px; width: 20%; text-align: center;">'+
                                '<div class="rr2" style="width: 80%; height: 15%; margin: 0 auto; display: inline-block; vertical-align: top; font-size: 1rem; cursor: pointer;margin-bottom: 10%; padding-bottom: 8px;">x</div><br/>';
                                outputr += "<div style='margin-bottom: 20%;'><a href='https://www.thefreedictionary.com/"+ word +"' target='_blank' style='color: black;'>" + word + "</div></a></div>";cWord++;
                            }
                        }
                        else {
                            outputr += '<div class="pure-u-1-3 reads" style="border: 2px solid black; border-radius: 10%; margin: 10px; width: 20%; text-align: center;">'+
                            '<div class="rr2" style="width: 80%; height: 15%; margin: 0 auto; display: inline-block; vertical-align: top; font-size: 1rem; cursor: pointer;margin-bottom: 10%; padding-bottom: 8px;">x</div><br/>';
                            outputr += "<div style='margin-bottom: 20%;'><a href='https://www.thefreedictionary.com/"+ word +"' target='_blank' style='color: black;'>" + word + "</div></a></div>";cWord++;
                        }
                    }
                }
                else if (nd != ""){
                    if (chkWord(word,nd,"e")==true){
                        outputr += '<div class="pure-u-1-3 reads" style="border: 2px solid black; border-radius: 10%; margin: 10px; width: 20%; text-align: center;">'+
                        '<div class="rr2" style="width: 80%; height: 15%; margin: 0 auto; display: inline-block; vertical-align: top; font-size: 1rem; cursor: pointer;margin-bottom: 10%; padding-bottom: 8px;">x</div><br/>';
                        outputr += "<div style='margin-bottom: 20%;'><a href='https://www.thefreedictionary.com/"+ word +"' target='_blank' style='color: black;'>" + word + "</div></a></div>";
                        cWord++;
                    }
                }
                else {
                    alert ("Error: No MATCH FOUND.");
                }
            }
          outputr += "</div>";
          return outputr;
    }
    
}

function VocabularyForm(num,Amount) {
//  num = num - 2;
  var outputr = "";
  outputr += '<div style="text-align:right; width:90%;"><INPUT TYPE="button" onClick="newer();" VALUE="NEW"/> || ';
  outputr += '<INPUT TYPE="button" onClick="window.print();" VALUE="PRINT"/></div>';
    outputr += "<div class='pure-g readUs' style='font-size:1.5rem; margin: 0 auto; padding-top:25px; background-color:white;justify-content: center;'><div class='pure-u-1' style='text-align:center;'><input class='traceMe' style='border: 1px solid black; border-radius:20; text-align:center; padding: 10px 0px; font-size: 3rem!important;' type='text' maxlength='20' value='name' name='name' /></div>";


  var dbb = JSON.parse(main);
//  alert(dbb["wordsof"][num]["items"][5]);
    for (var i=0; i<Amount; i++){
  var rand = Math.floor(Math.random() * dbb["wordsof"][num]["items"].length);
  var word = dbb["wordsof"][num]["items"][rand];
        outputr += '<div class="pure-u-1-3 reads" style="border: 2px solid black; border-radius: 10%; margin: 10px; width: 20%; text-align: center;">'+
        '<div class="rr" style="width: 80%; height: 15%; margin: 0 auto; display: inline-block; vertical-align: top; font-size: 1rem; cursor: pointer;margin-bottom: 10%; padding-bottom: 8px;">x</div><br/>';
        outputr += "<div style='margin-bottom: 20%;'><a href='https://www.thefreedictionary.com/"+ word +"' target='_blank' style='color: black;'>" + word + "</div></a></div>";

    }
  outputr += "</div>";

  return outputr;
}

function addVocabulary(letterNum){
    var newWord="";
  var dbs = JSON.parse(main);
    
  var rand = Math.floor(Math.random() * dbs["wordsof"][letterNum]["items"].length);
  var word = dbs["wordsof"][letterNum]["items"][rand];
    newWord += '<div class="pure-u-1-3 reads" style="border: 2px solid black; border-radius: 10%; margin: 10px; width: 20%; text-align: center;">'+
        '<div class="rr" style="width: 80%; height: 15%; margin: 0 auto; display: inline-block; vertical-align: top; font-size: 1rem; cursor: pointer;margin-bottom: 10%; padding-bottom: 8px;">x</div><br/>';
    newWord += "<div style='margin-bottom: 20%;'><a href='https://www.thefreedictionary.com/"+ word +"' target='_blank' style='color: black;'>" + word + "</div></a></div>";
    
/*    newWord +=`<script>  $(".rr").on("click", function(){
            $(this).parent().remove();
            addVocabulary(${letterNum});
        });   </script>`;
        
            newWord += "<div style='margin-bottom: 20%;'><a href='https://www.google.com/search?q=define+"+ word +"#dictionary-modules' target='_blank' style='color: black;'>" + word + "</div></a></div>";
        
        */
    return newWord;
    
}

function chkWord(wrd,chk,place){
    var o;
    switch (place){
        case ("s"):
            o = wrd.startsWith(chk);
            return o;
            break;
        case ("c"):
            o = wrd.includes(chk);
            return o;
            break;
        case ("e"):
            o = wrd.endsWith(chk);
            return o;
            break;
        default: 
            return false;
            break;
    }
}