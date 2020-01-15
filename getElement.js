<html>
<head><title>Javascript object methods </title></head>
<body>
<h3>getElementById</h3>
<p id="p1">Hello World!</p>
<br>
<h3>getElementsByTagName</h3>
<p>Hello World!</p>
<div id="main">
<p>The DOM is very useful.</p>
<p>This example demonstrates the <b>getElementsByTagName</b> method</p>
</div>
<p id="demo">hello world</p><br>
<h3>getElemetsByClassName</h3>
<p class="intro">The DOM is very useful.</p>
<p class="intro">This example demonstrates the <b>getElementsByClassName</b> method.</p>
<p id="demo1">hello world</p>
<script>
document.getElementById("p1").innerHTML = "New text!";
var x = document.getElementById("main");
var y = x.getElementsByTagName("p");
document.getElementById("demo").innerHTML = 
'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;
var z = document.getElementsByClassName("intro");
document.getElementById("demo1").innerHTML = 
'The first paragraph (index 0) with class="intro": ' + z[0].innerHTML;
</script>
</body>
</html>
