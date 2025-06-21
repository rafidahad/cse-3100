<!DOCTYPE html>
<html>
  <body>
    <h1>My first PHP page</h1>

    <?php
        echo "Hello World!";
        echo "<br>"; 
        $txt = "PHP";
        echo 'I love ' . $txt . '!<br>'; // concatenating strings with . for single quotes
        echo "I hate $txt"; // concat strings using double quotes
    ?>
  </body>
</html>
