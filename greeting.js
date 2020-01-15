<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h2>Welcome Sajid!</h2>
    <p id="greet"></p>
</body>
<script>
    const greet = document.getElementById('greet');
    const date = new Date();
    const hours = date.getHours();
    
    if(hours <12)
    {
        greet.innerHTML = "Good Morning";
    }
    else
    if(hours>=12 && hours<16)
    {
        greet.innerHTML = "Good After-Noon";
    }
    else{
        greet.innerHTML =  "Good Evening";
    }

</script>
</html>