function validate() {
    document.write('consubmit');
 }

 function out() {
    var a = document.getElementById('mouse');
    a.innerHTML = '<p> out </p>'
 }

 function over() {
    var a = document.getElementById('mouse');
    a.innerHTML = '<p> over </p>'
 }

 function go() {
     window.location = 'https://www.youtube.com/watch?v=LSMDNL4n0kM&list=RDP8qEusQiwsw&index=12';
 }
 document.write("You will be redirected to main page in 10 sec.");
setTimeout('go()', 10000);