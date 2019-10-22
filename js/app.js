
function tipcalc() {
  event.preventDefault();

  var chumburger = document.getElementById("chumB").value * 9.99;
  var chumfries =  document.getElementById("chumF").value * 4.99;
  var chumShake =  document.getElementById("chumS").value * 4.99;
  var chumOnStick =  document.getElementById("chumST").value * 5.99;
  var chumbalaya =  document.getElementById("chumLay").value * 8.99;
  var chumChili =  document.getElementById("chumChil").value * 8.99;
  var chumPie =  document.getElementById("chumPie").value * 6.99;

  var startTotal = chumburger + chumfries + chumShake + chumOnStick + chumbalaya + chumChili + chumPie;
  var checkedtip = document.querySelector('input[name = "rsvp"]:checked').value;
  var fulltotal = startTotal * checkedtip + startTotal;

 document.getElementById("total").innerText ="$" + fulltotal.toFixed(2) ;
 
}
