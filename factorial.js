<html>
<head>
<title>factorial of a number</title>
</head>
<body>
<h2>factorial of a given number </h2>
<p>factorial is</p>
<p id="factorial"></p>
<script>
{
var i;
fact=1;
var n=prompt("enter the number");
for(i=1;i<=n;i++)
{
fact=fact*i;
}
document.getElementById("factorial").innerHTML=fact;
}
</script>
</body>
</html>
