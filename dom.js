<html>
<body>
<h2>LIST OF ELECTRONICS ITEM</h2>
<div id="div1">
<p id="p1">MOBILE</p>
<p id="p2" >LAPTOPS</p>
<p id="p3">TELEVISION</p>
</div>
<button onclick="append()">append</button><br><br>
<div id="div2">
<p id="p4">charger</p>
<p id="p5">headphones</p>
</div>
<button onclick="myFunction()">remove</button>
<script>
function append()
{
var parent = document.getElementById("div1");
var child = document.getElementById("p1");
var para = document.createElement("p");
var node = document.createTextNode("Aluminium Foil");
para.appendChild(node);
parent.replaceChild(para,child);
}
function myFunction()
{
var x= document.getElementById("div2");
var y= document.getElementById("p4");
x.removeChild(y);
}
</script>
</body>
</html>
