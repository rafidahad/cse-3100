<?php
// indexed arrays
$cars = array("Volvo", "BMW", "Toyota"); // OR $cars = ["Volvo", "BMW", "Toyota"];

// associative arrays


$myCar = [
  "brand" => "Ford",
  "model" => "Mustang",
  "year" => 1964
];
print_r($myCar);
echo "<br>";
echo $myCar["brand"];
echo "<br>";

echo "<br>";
$fruits = array("Apple", "Banana", "Cherry");
array_push($fruits, "Orange", "Kiwi", "Lemon"); // add items to arrays
var_dump($fruits);

echo "<br>";
echo "<br>";

$cars = array("brand" => "Ford", "model" => "Mustang");
$cars += ["color" => "red", "year" => 1964]; // add items to associative arrays
var_dump($cars);

echo "<br>";
echo "<br>";



$cars = array("Volvo", "BMW", "Toyota");
foreach ($cars as $x) {
  echo "$x <br>";
}

echo "<br>";
echo "<br>";


$car = array("brand"=>"Ford", "model"=>"Mustang", "year"=>1964);
foreach ($car as $x => $y) {
  echo "$x: $y <br>";
}

echo "<br>";
echo "<br>";

$cars = array("Volvo", "BMW", "Toyota");
array_splice($cars, 1, 1); // starts at index 1 and deletes 1 item
var_dump($cars);

// or we can use the unset function
// unset removes an item from an array by its index
unset($cars[1]);

$cars = array("Volvo", "BMW", "Toyota");
array_pop($cars); // remove last item

$cars = array("Volvo", "BMW", "Toyota");
array_shift($cars); // remove first item

$cars = array("Volvo", "BMW", "Toyota");
sort($cars); // sort array. Use rsort() to sort in descending order