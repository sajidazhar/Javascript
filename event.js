<html>
<head>
<script language="javascript">
function f1()
{
alert("You clicked the button");
}
function f2()
{
alert("You double clicked the button");
}
function f3()
{
alert("ONLOAD");
}
function f4()
{
alert("ON-UNLOAD");
}
function f5()
{
alert("ON-MOUSE-OVER");
}
function f6()
{
alert("ON-MOUSE-OUT");
}
function f7()
{
alert("ON-MOUSE-MOVE");
}
function f8()
{
alert("ON-CHANGE");
}
function f9()
{
alert("ON-KEYDOWN");
}
function f10()
{
alert("ON-KEYUP");
}
function f11()
{
alert("ON-KEY-PRESS");
}
function f12()
{
alert("ON-FOCUS");
}
function f13()
{
alert("ON-BLUR");
}
function f14()
{
alert("ON-MOUSE-UP");
}
function f15()
{
alert("ON-MOUSE-DOWN");
}
function f16()
{
alert("ON-RESET");
}
function f17()
{
alert("ON-SUBMIT");
}
function f18()
{
alert("ON-SELECTING TEXT");
}
function myFunction() {
    alert("The form has been submitted");
}
</script>
</head>
<body onLoad="f3()" onUnload="f4()">
<p onMouseMove="f7()"> Event Handling in Javascript </p>

<input type="button" onClick="f1()" value="Click here"/>
<input type="button" onDblClick="f2()" value="Double Click here"/>
<input type="button" onMouseOver="f5()" onMouseOut="f6()" value="MOUSE"/>
<br>
<select onChange="f8()">
<option>1</option>
<option>2</option>
</select>
<BR>
<input type="text" onkeyDown="f9()" />
<input type="text" onKeyUp="f10()" onBlur="f13()"/>
<input type="text" onKeyPress="f11()" ><BR/>

<P onMouseDown="f15()">experiment 20 is performed here</P>
<p onMouseUp="f14()">java script different event handling is performed here </p>
<br>
<form  action="select.html" onReset="f16()">
<input type="text">
<input type="reset">
</form>
<input type="text" value="welcome to Chitkara University" onSelect="f18()"><br/>
<form action="" onsubmit="myFunction()">
  Enter name: <input type="text" name="fname">
  <input type="submit" value="Submit">
</form>
</body>
</html>
