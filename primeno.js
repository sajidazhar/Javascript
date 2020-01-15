<html>
<head></head>
<body>
        <h2>JavaScript to print Prime numbers!</h2>
        Enter the limit:  <input type="number" name="limit" id="100" min="0" style="width: 100px;" />&nbsp;<input type="submit" value="Print Prime Numbers" onclick="printPrime()" name="print" />
        <div id="result"></div>
    </body>
<script>
            function printPrime() {
                var i = 0;
                var j = 0;
   limit = document.getElementById('100').value;
   for (i = 1; i <= limit; i++) {
                    c = 0;
  for (j = 1; j <= i; j++) {
                        if (i % j == 0) 
                       {
                            c++;
                        }
                    }
                    if (c == 2) {
                        document.getElementById("result").insertAdjacentHTML('beforeend', i + ' ');
                    }
                }
            }
        </script>
      </html>
