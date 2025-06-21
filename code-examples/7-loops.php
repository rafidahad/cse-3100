<?php
echo "<h2>PHP Loops</h2>";
echo "<h3>For loop</h3>";
for ($x = 0; $x <= 10; $x++) {
  if ($x == 3) continue;
  echo "The number is: $x <br>";
}

echo "<br>";
echo "<h3>While loop</h3>";
$i = 1;
while ($i < 6) {
  if ($i == 3) break;
  echo $i;
  $i++;
}

echo "<br>";
echo "<h3>Foreach array loop</h3>";
$colors = array("red", "green", "blue", "yellow");
foreach ($colors as $x) {
  echo "$x <br>";
}

echo "<br>";
echo "<h3>Do-while loop</h3>";
$j = 7;
do {
    echo "j is $j <br>";   
    $j++;
} while ($j < 6);

echo "<br>";
echo "<h3>Foreach object loop</h3>";

class Car {
  public $color;
  public $model;
  public function __construct($color, $model) {
    $this->color = $color;
    $this->model = $model;
  }
}

// Print the property names and values of the $myCar object

$myCar = new Car("red", "Volvo");
foreach ($myCar as $x => $y) {
  echo "$x: $y <br>";
}