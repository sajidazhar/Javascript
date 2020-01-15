<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Current Date:-</h1><br>
    <p id="date"></p>
</body>
<script>
    const dateEl = document.getElementById('date');
    const days = ['monday','tuesday','wednesday','thrusday','friday','saturday','sunday'];
    const months = ['january','feburary','march','april','may','june','july','august','september','october','november','december']
    const currDate = new Date();
    const day = days[currDate.getDay()-1];
    let date = currDate.getDate();
    const month = months[currDate.getMonth()];
    const year = currDate.getFullYear()
    if(date<10)
    {
        date = '0'+date;
    }
    dateEl.innerHTML = `${day}, ${month} ${date},${year}.`
</script>
</html>