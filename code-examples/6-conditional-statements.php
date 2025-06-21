<?php

// Get the current hour in 24-hour format (00 to 23)
$t = date("H");

// Conditional logic using if-elseif-else
if ($t < "10") {
  echo "Have a good morning!<br>";
} elseif ($t < "20") {
  echo "Have a good day!<br>";
} else {
  echo "Have a good night!<br>";
}

// Example of the ternary operator
$a = 7; 

// If $a is less than 10, assign "Hello" to $b, otherwise assign "Good Bye"
$b = $a < 10 ? "Hello" : "Good Bye";

echo $b; // Output: Hello

$favcolor = "red";
echo "<br>";

// Conditional logic using switch statement
switch ($favcolor) {
  case "red":
    echo "Your favorite color is red!";
    break;
  case "blue":
    echo "Your favorite color is blue!";
    break;
  case "green":
    echo "Your favorite color is green!";
    break;
  default:
    echo "Your favorite color is neither red, blue, nor green!";
}