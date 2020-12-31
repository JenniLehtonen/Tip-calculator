var tipProcent = 15;
  function tipMinus(){
    tipProcent--;
    document.getElementById("tip").innerHTML=tipProcent + " %";
  }
  function tipPlus(){
    tipProcent++;
    document.getElementById("tip").innerHTML=tipProcent + " %";
  }
  function calculateTip(bill, people){  //calculate the amount of the tip and show it
   if (bill=== "" || people ===  ""){
      document.getElementById("totalTip").innerHTML = "0.00 €";
    } else {
      var calculatedTip = bill/100*tipProcent;
      var tip = calculatedTip/people;
      var fixedTip = tip.toFixed(2);
      document.getElementById("totalTip").innerHTML = fixedTip + " €";
    }
    
  }
    